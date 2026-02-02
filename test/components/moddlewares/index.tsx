import React, { useEffect } from 'react'
import {
  ComponentNode,
  createComponent,
  createLogger,
  renderComponent,
} from '@variousjs/various'

const M = createComponent({ module: 'middlewares.B' })

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
              module: 'middlewares.A',
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
          $postMessage({ event: 'block' })
        }}
        >
          postMessage block
        </button>
        <button onClick={() => {
          $postMessage({ event: 'next' })
        }}
        >
          postMessage changed
        </button>
      </div>

      <h3>onDispatch</h3>
      <div className="value">
        <button onClick={() => {
          $dispatch({ target: 'any', action: 'block' })
        }}
        >
          dispatch block
        </button>
        <button onClick={() => {
          $dispatch({ target: 'middlewares.B', action: 'a' })
        }}
        >
          dispatch changed
        </button>
      </div>

      <h3>OnError</h3>
      <div className="value">
        <button
          onClick={async () => {
            const un = await renderComponent({
              module: 'middlewares.A',
              target: document.querySelector('#error'),
            })
            setTimeout(un)
          }}
        >
          render component error
        </button>
      </div>

      <h3>Logger Error</h3>
      <div className="value">
        <button
          onClick={() => {
            const logger = createLogger('ll')
            logger.error(new Error('error'))
          }}
        >
          logger error
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
