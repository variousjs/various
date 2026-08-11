import React from 'react'

// Component used to verify getModuleUrl coverage: created WITHOUT an explicit
// url in standalone mode, relying on a URL registered via defineModules/setModuleUrl.
const C = (props: any) => (
  <div>
    <h3>Self Info</h3>
    <div className="value">
      <p>self url: {props.$self?.url}</p>
    </div>
  </div>
)

export default C
