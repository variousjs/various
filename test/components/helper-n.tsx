import React, { useRef, useState } from 'react'
import { ComponentNode, createComponent, renderComponent } from '@variousjs/various'
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
    <button
      type="button"
      onClick={() => {
        renderComponent({
          // name: 'vue-toggles',
          name: 'v-dispatch',
          target: document.querySelector('#vue-component-div'),
          type: 'vue3',
          props: { checkedBg: 'green', text: 'render' },
          // url: 'https://unpkg.com/vue-toggles@2.2.1/dist/vue-toggles.umd.cjs',
        })
      }}
    >
      renderComponent
    </button>
    <div id="vue-component-div" />
    <button
      type="button"
      onClick={() => {
        renderComponent({
          // name: 'vue-toggles',
          name: 'v-dispatch',
          target: document.querySelector('#vue-component-div2'),
          type: 'vue3',
          props: { checkedBg: 'green', text: 'render' },
          // url: 'https://unpkg.com/vue-toggles@2.2.1/dist/vue-toggles.umd.cjs',
        })
      }}
    >
      renderComponent2
    </button>
    <div id="vue-component-div2" />
  </>
)) as ComponentNode

VueD.$onMessage = (v) => {
  console.log(v)
}

export const VueC = () => {
  const [count, setCount] = useState('')
  const c = useRef(0)

  return (
    <>
      <V
        text={`vue-button${count}`}
        onClick={(e: PointerEvent) => {
          c.current += 1
          setCount(`${e.screenX}.${c.current}`)
        }}
      />
      <V text="666" />
    </>
  )
}
