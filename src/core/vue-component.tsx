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
  VariousError,
  getMountedComponents,
  hasModule,
  getComponentActions,
} from './helper'
import { CreateComponentProps, RequiredComponent } from './types'

function vueComponent<P extends object>(config: ModuleDefined & {
  url?: string,
  watchKeys?: string[],
  onMounted: () => void,
}) {
  const {
    name,
    module,
    url,
    watchKeys,
    onMounted,
  } = config

  const V: FC<CreateComponentProps<P> &ComponentDefaultProps> = (props) => {
    const storeKeys = (watchKeys || Object.keys(getStore()))
    const store = useStore(...storeKeys)

    const errorRef = useRef<Error | ve>()
    const isUnMountedRef = useRef(false)
    const ComponentNodeRef = useRef<RequiredComponent>()

    const containerDivRef = useRef<HTMLDivElement | null>(null)
    const vueReactiveRef = useRef<{ value: ObjectRecord }>()
    const unMountVue = useRef<() => void>()

    const [componentExist, setComponentExist] = useState(false)
    const [componentReady, setComponentReady] = useState(false)
    const [isError, setIsError] = useState(false)

    const LoaderNode = connector.getLoaderComponent()
    const { $silent, $componentProps } = props

    const mountVue = useCallback(() => {
      vueReactiveRef.current = ref({ ...$componentProps, ...store })

      const vueApp = createApp({
        render() {
          return h(ComponentNodeRef.current as any, {
            ...vueReactiveRef.current!.value,
          })
        },
      })

      vueApp.mount(containerDivRef.current!)
      unMountVue.current = () => vueApp.unmount()
    }, [$componentProps, store])

    const mountComponent = useCallback(async () => {
      try {
        const componentNode = await createModule<RequiredComponent>({ name, module, url }, false)

        if (isUnMountedRef.current) {
          return
        }

        const isVueComponent = await checkVueComponent(componentNode)

        if (!isVueComponent) {
          throw new VariousError({
            name,
            module,
            originalError: new Error('not a valid Vue component'),
            type: 'INVALID_COMPONENT',
          })
        }

        const mountedComponents = getMountedComponents()

        if (!hasModule(mountedComponents, { name, module })) {
          mountedComponents.push({ name, module })
        }

        const {
          actions,
          i18nAction,
          onMessageAction,
        } = getComponentActions(componentNode, 'vue3')

        console.log(actions, '???')

        ComponentNodeRef.current = componentNode
        setTimeout(mountVue)
        setComponentReady(true)
        onMounted()
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

    useEffect(() => {
      setComponentExist(Boolean(connector.getComponent({ name, module })))

      return () => {
        errorRef.current = undefined
        ComponentNodeRef.current = undefined
        isUnMountedRef.current = true
        unMountComponent({ name, module })
        unMountVue.current?.()
      }
    }, [])

    useEffect(() => {
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
          !componentReady && !$silent && !componentExist
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
