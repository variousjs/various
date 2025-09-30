import React, { useRef, useState } from 'react'
import { ComponentProps, createComponent } from '@variousjs/various'

const V = createComponent({ name: 'v-dispatch', type: 'vue3' })

export default () => (
  <div>N</div>
)

const VueD = (props: ComponentProps) => (
  <button
    type="button"
    onClick={() => props.$dispatch({
      name: 'v-dispatch',
      action: 'aa',
      value: '666',
    })}
  >
    dispatch-vue
  </button>
)

export const VueC = (props: ComponentProps) => {
  const [count, setCount] = useState('')
  const c = useRef(0)

  return (
    <div>
      <V
        text={`vue-button${count}`}
        onClick={(e: PointerEvent) => {
          c.current += 1
          setCount(`${e.screenX}.${c.current}`)
        }}
      />
      <VueD {...props} />
    </div>
  )
}
