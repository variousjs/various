import React, {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import Vue from 'vue'
import {
  ComponentDefaultProps,
  ModuleDefined,
  VariousError as ve,
  ObjectRecord,
} from '@variousjs/various'
import ErrorBoundary from './error-boundary'
import connector from './connector'
import createModule from './create-module'
import { getStore, useStore } from './store'
import {
  getNameWithModule,
  updateUnMountComponent,
  updateMountedComponent,
  checkVueComponent,
  parseComponentActions,
  isModuleLoaded,
} from './helper'
import createDispatch from './dispatch'
import createLogger from './logger'
import { createPostMessage } from './message'
import { CreateComponentProps, RequiredComponent } from '../types'
import { createI18n } from './i18n'

function vueComponent<P extends object>(config: ModuleDefined & {
  url?: string,
  watchKeys?: string[],
  onMounted?: () => void,
}) {
  const {
    name,
    module,
    url,
    watchKeys,
    onMounted,
  } = config
  const storeKeys = (watchKeys || Object.keys(getStore()))

  const V: FC<CreateComponentProps<P> & ComponentDefaultProps> = (props) => {
    const store = useStore(...storeKeys)

    const vueRef = useRef<typeof Vue>()
    const isVueMounted = useRef(false)
    const errorRef = useRef<Error | ve>()
    const isUnMountedRef = useRef(false)
    const ComponentNodeRef = useRef<RequiredComponent>()

    const containerDivRef = useRef<HTMLDivElement | null>(null)
    const vueReactiveRef = useRef<{ value: ObjectRecord }>()
    const unMountVue = useRef<() => void>()
    const unSubscribeMessageRef = useRef<() => void>()

    const [componentReady, setComponentReady] = useState(false)
    const [isError, setIsError] = useState(false)

    const LoaderNode = connector.getLoaderComponent()
    const { $silent, $componentProps } = props

    const mountVue = useCallback(() => {
      const $logger = createLogger({ name, module })
      const $dispatch = createDispatch({ name, module })
      const $postMessage = createPostMessage({ name, module })
      const $t = createI18n({ name, module })

      vueReactiveRef.current = vueRef.current!.ref({ ...$componentProps, ...store })

      const vueApp = vueRef.current!.createApp({
        render() {
          return vueRef.current!.h(ComponentNodeRef.current as any, {
            ...vueReactiveRef.current!.value,
            various: {
              $dispatch,
              $logger,
              $postMessage,
              $t,
            },
          })
        },
      })

      vueApp.mount(containerDivRef.current!)
      isVueMounted.current = true
      unMountVue.current = () => vueApp.unmount()
    }, [$componentProps, store])

    const mountComponent = useCallback(async () => {
      try {
        const vue = await createModule<typeof Vue>({ name: 'vue' })
        vueRef.current = vue

        const componentNode = await createModule<RequiredComponent>({ name, module, url }, false)

        if (isUnMountedRef.current) {
          return
        }

        await checkVueComponent(componentNode, { name, module })

        updateMountedComponent({ name, module })

        unSubscribeMessageRef.current = parseComponentActions({
          componentNode,
          name,
          module,
          type: 'vue3',
          i18nUpdate() {
            unMountVue.current?.()
            mountVue()
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

    useEffect(() => () => {
      errorRef.current = undefined
      ComponentNodeRef.current = undefined
      isUnMountedRef.current = true
      updateUnMountComponent({ name, module })
      unMountVue.current?.()
      unSubscribeMessageRef.current?.()
      isVueMounted.current = false
    }, [])

    useEffect(() => {
      if (isVueMounted.current) {
        return
      }
      mountComponent()
    }, [mountComponent])

    useEffect(() => {
      if (vueReactiveRef.current) {
        vueReactiveRef.current.value = { ...$componentProps, ...store }
      }
    }, [$componentProps, store])

    if (isError) {
      throw errorRef.current
    }

    return (
      <>
        {
          !componentReady && !$silent && !isModuleLoaded(name)
            ? (
              <LoaderNode
                $name={name}
                $module={module}
                $store={store}
              />
            )
            : null
        }
        <div
          className={`various-component-${getNameWithModule({ name, module })}`}
          ref={containerDivRef}
        />
      </>
    )
  }

  V.displayName = getNameWithModule({ name, module })

  const VueCreator: FC<CreateComponentProps<P> & ComponentDefaultProps> = (props) => (
    <ErrorBoundary name={name} module={module}>
      <V {...props} />
    </ErrorBoundary>
  )

  VueCreator.displayName = 'various-vue-creator'

  return VueCreator
}

export default vueComponent
