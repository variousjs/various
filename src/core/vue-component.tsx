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
} from '@variousjs/various'
import ErrorBoundary from './error-boundary'
import connector from './connector'
import createModule from './create-module'
import { VUE_FUNCTION_OPTIONS } from './config'
import { getStore, useStore } from './store'
import { getNameWithModule, unMountComponent } from './helper'
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
  const storeKeys = (watchKeys || Object.keys(getStore()))

  const V: FC<CreateComponentProps<P> &ComponentDefaultProps> = (props) => {
    const store = useStore(...storeKeys)

    const errorRef = useRef<Error | ve>()
    const isUnMountedRef = useRef(false)
    const ComponentNodeRef = useRef<RequiredComponent>()

    const [componentExist, setComponentExist] = useState(false)
    const [componentReady, setComponentReady] = useState(false)
    const [isError, setIsError] = useState(false)

    const LoaderNode = connector.getLoaderComponent()
    const { $silent, $componentProps } = props

    const mountComponent = useCallback(async () => {
      try {
        const componentNode = await createModule<RequiredComponent>({ name, module, url }, false)

        if (isUnMountedRef.current) {
          return
        }

        // check vue

        console.log(componentNode, '???')
      } catch (e) {
        if (isUnMountedRef.current) {
          return
        }

        errorRef.current = e as Error
        setComponentReady(true)
        setIsError(true)
      }
    }, [])

    useEffect(() => {
      setComponentExist(Boolean(connector.getComponent({ name, module })))

      return () => {
        errorRef.current = undefined
        ComponentNodeRef.current = undefined
        isUnMountedRef.current = true
        unMountComponent({ name, module })
      }
    }, [])

    useEffect(() => {
      mountComponent()
    }, [mountComponent])

    if (isError) {
      throw errorRef.current
    }

    if (!componentReady) {
      if ($silent || componentExist) {
        return null
      }

      return (
        <LoaderNode
          $name={name}
          $module={module}
          $store={store}
        />
      )
    }

    return null
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
