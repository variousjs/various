import React from 'react'

export default () => (
  <div>
    error
    {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      noexist.property
    }
  </div>
)
