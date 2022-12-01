import React, { useEffect, useRef } from 'react'
import { Button, Descriptions } from 'antd'
import { renderComponent } from '@variousjs/various'

export const L = () => {
  const unMount = useRef<() => void>(() => null)

  useEffect(() => () => unMount.current(), [])

  return (
    <Descriptions column={1} size="small" title="L" layout="vertical" bordered>
      <Descriptions.Item label="L">
        <div id="switch" style={{ minHeight: 20 }} />
      </Descriptions.Item>

      <Descriptions.Item label="Actions">
        <Button
          data-l="action-render"
          size="small"
          type="primary"
          onClick={() => {
            unMount.current = renderComponent({
              name: 'switch',
              url: './libs/switch.min.js',
              target: document.querySelector('#switch'),
            })
          }}
        >
          Render
        </Button>
        <Button
          data-l="action-unmount"
          size="small"
          type="primary"
          onClick={() => {
            unMount.current()
          }}
        >
          Unmount
        </Button>
      </Descriptions.Item>
    </Descriptions>
  )
}

export const LL = () => {
  const unMount = useRef<() => void>(() => null)
  const unMountS = useRef<() => void>(() => null)

  useEffect(() => () => unMount.current(), [])
  useEffect(() => () => unMountS.current(), [])

  return (
    <Descriptions column={1} size="small" title="LL" layout="vertical" bordered>
      <Descriptions.Item label="T">
        <div id="timeout" style={{ minHeight: 20 }} />
      </Descriptions.Item>

      <Descriptions.Item label="S">
        <div id="success" style={{ minHeight: 20 }} />
      </Descriptions.Item>

      <Descriptions.Item label="Actions">
        <Button
          data-ll="action-render-t"
          size="small"
          type="primary"
          onClick={() => {
            unMount.current = renderComponent({
              name: 'create-timeout',
              target: document.querySelector('#timeout'),
            })
          }}
        >
          Render T
        </Button>
        <Button
          data-ll="action-unmount-t"
          size="small"
          type="primary"
          onClick={() => {
            unMount.current()
          }}
        >
          Unmount T
        </Button>

        <Button
          data-ll="action-render-s"
          size="small"
          type="primary"
          onClick={() => {
            unMountS.current = renderComponent({
              name: 'create-j',
              target: document.querySelector('#success'),
            })
          }}
        >
          Render S
        </Button>
        <Button
          data-ll="action-unmount-s"
          size="small"
          type="primary"
          onClick={() => {
            unMountS.current()
          }}
        >
          Unmount S
        </Button>
      </Descriptions.Item>
    </Descriptions>
  )
}
