import React, { useEffect } from 'react'
import { ComponentNode, createComponent, renderComponent } from '@variousjs/various'

const M = createComponent({ name: 'middlewares', module: 'B' })

export default ((props) => {
  const { $logger, $postMessage, $dispatch } = props

  useEffect(() => {
    window.middlewaresEnabled = true
    return () => {
      window.middlewaresEnabled = false
    }
  }, [])

  return (
    <>
      <M />
      <h3>onLog</h3>
      <div className="value">
        <button onClick={() => $logger.info('block')}>logger block</button>
      </div>

      <h3>OnLoad</h3>
      <div className="value">
        <div id="onload" />
        <button
          onClick={() => {
            renderComponent({
              name: 'middlewares',
              module: 'A',
              target: document.querySelector('#onload'),
            })
          }}
        >
          render component
        </button>
      </div>

      <h3>onMessage</h3>
      <div className="value">
        <button onClick={() => {
          $postMessage('block')
        }}
        >
          postMessage block
        </button>
        <button onClick={() => {
          $postMessage('next')
        }}
        >
          postMessage changed
        </button>
      </div>

      <h3>onDispatch</h3>
      <div className="value">
        <button onClick={() => {
          $dispatch({ name: 'any', action: 'block' })
        }}
        >
          dispatch block
        </button>
        <button onClick={() => {
          $dispatch({ name: 'middlewares', module: 'B', action: 'a' })
        }}
        >
          dispatch changed
        </button>
      </div>

      <h3>OnError</h3>
      <div className="value">
        <button
          onClick={() => {
            const un = renderComponent({
              name: 'middlewares',
              module: 'A',
              target: document.querySelector('#error'),
            })
            setTimeout(un)
          }}
        >
          render component error
        </button>
      </div>
    </>
  )
}) as ComponentNode

export const A = () => null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const B = ((_) => null) as ComponentNode
B.$onMessage = (e) => {
  window.console.log(e.event)
}
B.changed = () => {
  window.console.log('dispatch action changed')
}
