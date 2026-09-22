import React, { useEffect, useState } from 'react'
import {
  renderComponent,
} from '@variousjs/various'
import type { VariousFC } from '@variousjs/various'

// demo page for middleware hot update: the app bundle only carries the
// delegate shell, strategy logic is swapped at runtime via app actions
const M = ((props) => {
  const { $dispatch, $logger, $postMessage } = props
  const [version, setVersion] = useState('loading')

  useEffect(() => {
    $dispatch({ target: 'app', action: 'getMiddlewaresVersion' })
      .then(setVersion)
    // $dispatch is stable for the module lifetime
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h3>Strategy [example]</h3>
      <div className="value">
        <p id="strategy-version">{version}</p>
        <button
          onClick={async () => {
            const next = await $dispatch({ target: 'app', action: 'updateMiddlewares' })
            setVersion(next)
          }}
        >
          update middlewares
        </button>
      </div>

      <h3>Middleware triggers</h3>
      <div className="value">
        <button
          onClick={() => $dispatch({ target: 'dynamic-middlewares', action: 'block' })}
        >
          dispatch block
        </button>
        <button onClick={() => $logger.info('info')}>
          logger info
        </button>
        <button onClick={() => $postMessage({ event: 'hello' })}>
          postMessage hello
        </button>
        <button
          onClick={() => renderComponent({
            module: 'dynamic-middlewares.A',
            target: document.querySelector('#onload'),
          })}
        >
          render A
        </button>
      </div>
      <div id="onload" />
    </>
  )
}) as VariousFC

// real action on this module, so the v1 pass-through path resolves cleanly
// while v2 blocks the same dispatch before it reaches the component
M.block = () => null

// submodule for the onLoad trigger button
export const A = () => null

export default M
