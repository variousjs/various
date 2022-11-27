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
