import React, { useRef, useState } from 'react'
import { ComponentNode, createComponent } from '@variousjs/various'
import { Store } from '../types'

const V = createComponent<Store>({ name: 'v-dispatch', type: 'vue3' }, ['name'])

export default () => (
  <div>N</div>
)

export const VueD = ((props) => (
  <>
    <button
      type="button"
      onClick={() => props.$dispatch({
        name: 'v-dispatch',
        action: 'inputChange',
        value: new Date().getMilliseconds(),
      })}
    >
      dispatch-vue
    </button>
    <button
      type="button"
      onClick={() => props.$dispatch({
        name: 'app',
        action: 'setName',
        value: new Date().getMilliseconds(),
      })}
    >
      dispatch-global
    </button>
    <button
      type="button"
      onClick={() => props.$postMessage('message', 'message')}
    >
      postMessage
    </button>
  </>
)) as ComponentNode

VueD.$onMessage = (v) => {
  console.log(v)
}

export const VueC = () => {
  const [count, setCount] = useState('')
  const c = useRef(0)

  return (
    <V
      text={`vue-button${count}`}
      onClick={(e: PointerEvent) => {
        c.current += 1
        setCount(`${e.screenX}.${c.current}`)
      }}
    />
  )
}
