import React, { useEffect, useRef, useState } from 'react'
import { Descriptions, Button } from 'antd'
import {
  onComponentMounted,
  renderComponent,
  preloadModules,
  isModuleLoaded,
  createModule,
} from '@variousjs/various'

export default () => {
  const [showRender, setShowRender] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [preLoaded, setPreLoaded] = useState(false)
  const unMount = useRef<() => void>(() => null)

  const onPreload = async () => {
    if (isModuleLoaded('helper-n')) {
      setPreLoaded(true)
    }
    await preloadModules(['helper-n'])
    if (isModuleLoaded('helper-n')) {
      setPreLoaded(true)
    }
  }

  const onCreate = async () => {
    const j = await createModule({ name: 'create-jjj' })
    console.log(j)
  }

  useEffect(() => () => unMount.current(), [])

  useEffect(() => {
    const un = onComponentMounted('config', () => {
      setShowRender(true)
    })
    return un
  }, [])

  useEffect(() => {
    const un = onComponentMounted(['helper-m.N'], () => {
      setIsLoaded(true)
    })
    return un
  }, [])

  useEffect(() => {
    const un = onComponentMounted(['no-exist'], () => {
      window.console.log('never')
    })
    return un
  }, [])

  return (
    <Descriptions column={3} size="small" title="M" layout="vertical" bordered>
      <Descriptions.Item label="N">
        <div data-m="n" id="n">
          -
        </div>
      </Descriptions.Item>

      <Descriptions.Item label="N Loaded">
        <div data-m="loaded">
          {isLoaded ? 'true' : 'false'}
        </div>
      </Descriptions.Item>

      <Descriptions.Item label="Preloaded">
        <div data-m="preloaded">
          {preLoaded ? 'true' : 'false'}
        </div>
      </Descriptions.Item>

      <Descriptions.Item label="Actions">
        {
          showRender ? (
            <Button
              data-m="action-render"
              onClick={() => {
                unMount.current = renderComponent({
                  name: 'helper-m',
                  module: 'N',
                  target: document.querySelector('#n'),
                })
              }}
              size="small"
              type="primary"
            >
              Render N
            </Button>
          ) : null
        }
        <Button data-m="action-preload" onClick={onPreload} size="small" type="primary">Preload</Button>
        <Button data-m="action-create" onClick={onCreate} size="small" type="primary">CreateModule</Button>
      </Descriptions.Item>
    </Descriptions>
  )
}

export const N = () => <div>N</div>
