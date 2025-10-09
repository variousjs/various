import React, {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createApp, h, ref } from 'vue'
import {
  ComponentDefaultProps,
  ModuleDefined,
  VariousError as ve,
  ObjectRecord,
} from '@variousjs/various'
import ErrorBoundary from './error-boundary'
import connector from './connector'
import createModule from './create-module'
import { MOUNTED_COMPONENTS_KEY } from './config'
import { emit, getStore, useStore } from './store'
import {
  getNameWithModule,
  unMountComponent,
  checkVueComponent,
  getMountedComponents,
  hasModule,
  getComponentActions,
} from './helper'
import createDispatch from './dispatch'
import createLogger from './logger'
import { createPostMessage, createOnMessage } from './message'
import { CreateComponentProps, RequiredComponent } from './types'
import { createI18n, createI18nConfig } from './i18n'

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

      vueReactiveRef.current = ref({ ...$componentProps, ...store })

      const vueApp = createApp({
        render() {
          return h(ComponentNodeRef.current as any, {
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
        const componentNode = await createModule<RequiredComponent>({ name, module, url }, false)

        if (isUnMountedRef.current) {
          return
        }

        await checkVueComponent(componentNode, { name, module })

        const mountedComponents = getMountedComponents()

        if (!hasModule(mountedComponents, { name, module })) {
          mountedComponents.push({ name, module })
        }

        const {
          actions,
          i18nAction,
          onMessageAction,
        } = getComponentActions(componentNode, 'vue3')

        if (onMessageAction) {
          unSubscribeMessageRef.current = createOnMessage(
            { name, module },
            onMessageAction,
          )
        }

        if (i18nAction) {
          createI18nConfig(i18nAction, { name, module }, () => {
            unMountVue.current?.()
            mountVue()
          })
        }

        connector.setComponentActions({ name, module }, actions)

        ComponentNodeRef.current = componentNode
        setTimeout(mountVue)
        setComponentReady(true)
        onMounted?.()
        emit({ [MOUNTED_COMPONENTS_KEY]: mountedComponents }, true)
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
      unMountComponent({ name, module })
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
          !componentReady && !$silent
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
          style={{ display: componentReady ? 'block' : 'none' }}
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
