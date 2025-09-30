import React, { useMemo, useState } from 'react'
import { createComponent } from '@variousjs/various'

const V = createComponent({ name: 'v-dispatch', type: 'vue3' })

export default () => (
  <div>N</div>
)

export const VueC = () => {
  const [count, setCount] = useState(0)
  const Mv = useMemo(() => (
    <V
      text="vue-button"
      onClick={(e: PointerEvent) => {
        setCount(e.screenX)
      }}
    />
  ), [])

  return (
    <div>
      <p>{count}</p>
      {Mv}
    </div>
  )
}
