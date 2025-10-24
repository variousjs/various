import React from 'react'

export default () => (
  <>
    <h3>App Loading Error</h3>
    <div className="value">
      <button onClick={() => window.open('/app/error.html')}>go</button>
    </div>

    <h3>App Default Config</h3>
    <div className="value">
      <button onClick={() => window.open('/app/default-config.html')}>go</button>
    </div>

    <h3>App Container Error</h3>
    <div className="value">
      <button onClick={() => window.open('/app/container-error.html')}>go</button>
    </div>
  </>
)
