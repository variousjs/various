import React, {
  ComponentType,
  FC,
  useEffect,
  useRef,
  useState,
} from 'react'
import * as Vue from 'vue'
import createComponent from './core/create-component'
import { loadRequireJS, defineDependencies } from './core/helper'
import { createStore, emit } from './core/store'
import {
  MOUNTED_COMPONENTS_KEY,
  DEPENDENCIES_KEY,
  CONFIG_KEY,
  MESSAGE_KEY,
} from './core/config'

createStore({
  [MOUNTED_COMPONENTS_KEY]: [],
  [MESSAGE_KEY]: null,
  [CONFIG_KEY]: {},
  [DEPENDENCIES_KEY]: {},
})

type CreateProps = Parameters<typeof createComponent>['0']

const Standalone: FC<CreateProps> = (props) => {
  const [componentReady, setComponentReady] = useState(false)
  const componentNode = useRef<ComponentType>()

  useEffect(() => {
    loadRequireJS('https://cdn.jsdelivr.net/npm/requirejs@2.3.7/require.min.js')
      .then(() => {
        defineDependencies({ [props.name]: props.url! })

        window.define('react', [], () => React)
        window.define('vue', [], () => Vue)

        setTimeout(() => {
          componentNode.current = createComponent(props)
          setComponentReady(true)
        }, 300)
      })
  }, [props])

  if (!componentReady) {
    return null
  }

  const C = componentNode.current!

  return (
    <C />
  )
}

Standalone.displayName = 'various-standalone'

export default (args: CreateProps) => {
  emit({ locale: 'zh' })

  const component: FC = () => <Standalone {...args} />
  component.displayName = 'various-standalone-creator'
  return component
}
