import React, {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import Vue, { ComponentPublicInstance } from 'vue'
import {
  ComponentDefaultProps,
  ModuleDef,
  VariousError as ve,
  ObjectRecord,
} from '@variousjs/various'
import connector from './connector'
import createModule from './create-module'
import { getStore, useStore } from './store'
import {
  updateUnMountComponent,
  updateMountedComponent,
  checkVueComponent,
  parseComponentActions,
  isModuleLoaded,
  VariousError,
  getSelfInfo,
  getClassNameWithModule,
} from './helper'
import createDispatch from './dispatch'
import createLogger from './logger'
import { createPostMessage } from './message'
import { CreateComponentProps, RequiredComponent } from '../types'
import { createI18n } from './i18n'

function vueComponent<P extends object>(config: {
  module: ModuleDef,
  url?: string,
  watchKeys?: string[],
  onMounted?: () => void,
}) {
  const {
    module,
    url,
    watchKeys,
    onMounted,
  } = config
  const storeKeys = (watchKeys || Object.keys(getStore()))

  const V: FC<CreateComponentProps<P> & ComponentDefaultProps> = (props) => {
    const store = useStore(...storeKeys)

    const vueRef = useRef<typeof Vue>()
    const vmRef = useRef<ComponentPublicInstance>()
    const isVueMounted = useRef(false)
    const errorRef = useRef<Error | ve>()
    const isUnMountedRef = useRef(false)
    const ComponentNodeRef = useRef<RequiredComponent>()
    const selfRef = useRef(getSelfInfo({ module, url }))

    const containerDivRef = useRef<HTMLDivElement | null>(null)
    const propsReactiveRef = useRef<{ value: ObjectRecord }>()
    const storeReactiveRef = useRef<{ value: ObjectRecord }>()
    const unMountVue = useRef<() => void>()
    const unSubscribeMessageRef = useRef<() => void>()
    const updateVueComponentRef = useRef<() => void>()

    const [componentReady, setComponentReady] = useState(false)
    const [isError, setIsError] = useState(false)

    const Fallback = connector.getFallbackComponent()
    const { $silent, $componentProps } = props

    const mountVue = useCallback(() => {
      const $logger = createLogger(module)
      const $dispatch = createDispatch(module)
      const $postMessage = createPostMessage(module)
      const $t = createI18n(module, () => {
        updateVueComponentRef.current?.()
      })

      propsReactiveRef.current = vueRef.current!.ref<ObjectRecord>({ ...$componentProps })
      storeReactiveRef.current = vueRef.current!.ref<ObjectRecord>({ ...store })

      const vueApp = vueRef.current!.createApp({
        setup() {
          const renderKey = vueRef.current!.ref(0)
          updateVueComponentRef.current = () => {
            renderKey.value += 1
          }
          return {
            key: renderKey,
          }
        },

        errorCaptured(e) {
          const error = e as Error
          errorRef.current = error.message?.includes('https://react')
            ? new VariousError({
              originalError: new Error('not a valid Vue component'),
              module,
              type: 'INVALID_COMPONENT',
            })
            : error
          setIsError(true)
        },

        render() {
          return vueRef.current!.h(ComponentNodeRef.current as any, {
            ...propsReactiveRef.current!.value,
            various: {
              $dispatch,
              $logger,
              $postMessage,
              $t,
              $store: storeReactiveRef.current!.value,
              $self: selfRef.current,
            },
            // eslint-disable-next-line react/no-this-in-sfc
            key: this.key,
          })
        },
      })

      // fix StrictMode
      if (!vmRef.current) {
        vmRef.current = vueApp.mount(containerDivRef.current!)
      }

      isVueMounted.current = true
      unMountVue.current = () => vueApp.unmount()
    }, [$componentProps, store])

    const mountComponent = useCallback(async () => {
      try {
        const vue = await createModule<typeof Vue>({ module: 'vue' })
        vueRef.current = vue

        const componentNode = await createModule<RequiredComponent>({ module, url }, false)

        if (isUnMountedRef.current) {
          return
        }

        await checkVueComponent(componentNode, module)

        updateMountedComponent(module)

        unSubscribeMessageRef.current = parseComponentActions({
          componentNode,
          module,
          type: 'vue3',
          i18nUpdate() {
            updateVueComponentRef.current?.()
          },
        })

        ComponentNodeRef.current = componentNode

        setTimeout(mountVue)
        setComponentReady(true)

        onMounted?.()
      } catch (e) {
        if (isUnMountedRef.current) {
          return
        }

        errorRef.current = e as Error
        setComponentReady(true)
        setIsError(true)
      }
    }, [mountVue])

    useEffect(() => {
      // fix StrictMode
      isUnMountedRef.current = false

      return () => {
        errorRef.current = undefined
        ComponentNodeRef.current = undefined
        isUnMountedRef.current = true
        updateUnMountComponent(module)
        unMountVue.current?.()
        unSubscribeMessageRef.current?.()
        isVueMounted.current = false
      }
    }, [])

    useEffect(() => {
      if (isVueMounted.current) {
        return
      }
      mountComponent()
    }, [mountComponent])

    useEffect(() => {
      if (propsReactiveRef.current) {
        propsReactiveRef.current.value = { ...$componentProps }
      }
    }, [$componentProps])

    useEffect(() => {
      if (storeReactiveRef.current) {
        storeReactiveRef.current.value = { ...store }
      }
    }, [store])

    if (isError) {
      throw errorRef.current
    }

    return (
      <>
        {
          !componentReady && !$silent && !isModuleLoaded(module)
            ? (
              <Fallback
                $self={selfRef.current}
                $store={store}
              />
            )
            : null
        }
        <div
          className={getClassNameWithModule(module, 'various-vue-component')}
          ref={containerDivRef}
        />
      </>
    )
  }

  V.displayName = module

  const VueComponent: FC<
    CreateComponentProps<P> & ComponentDefaultProps
  > = (props) => (<V {...props} />)

  VueComponent.displayName = 'various-vue-component'

  return VueComponent
}

export default vueComponent
