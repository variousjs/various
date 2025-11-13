import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { renderComponent, ComponentNode } from '@variousjs/various'
import { HashRouter, useLocation } from 'react-router-dom'
import { Store } from '../../types'

export default () => {
  const ref = useRef<any>(null)
  const unMountedRef = useRef<(() => Promise<void>)[]>([])
  const [showRefBtn, setShowRefBtn] = useState(false)
  const unMounteA = useRef<() => Promise<void>>()

  useEffect(() => () => {
    unMountedRef.current.forEach((s) => s())
  }, [])

  return (
    <>
      <h3>Render Component</h3>
      <div className="value">
        <div id="a-dom" />
        <button
          onClick={async () => {
            const un = await renderComponent({ name: 'render', module: 'A', target: document.querySelector('#a-dom') })
            unMounteA.current = un
          }}
        >
          renderA
        </button>
        <button onClick={() => unMounteA.current?.()}>unMounteA</button>
      </div>

      <h3>Props</h3>
      <div className="value">
        <div id="props-dom" />
        <button
          onClick={async () => {
            const un = await renderComponent({
              name: 'render',
              module: 'WidthProps',
              target: document.querySelector('#props-dom'),
              props: { foo: 'bar' },
            })
            unMountedRef.current.push(un)
          }}
        >
          with props
        </button>
      </div>

      <h3>Global Props</h3>
      <div className="value">
        <div id="global-dom" />
        <button
          onClick={async () => {
            const un = await renderComponent({
              name: 'render',
              module: 'GlobalProps',
              target: document.querySelector('#global-dom'),
            })
            unMountedRef.current.push(un)
          }}
        >
          global
        </button>
      </div>

      <h3>Ref(React)</h3>
      <div className="value">
        <div id="ref-dom" />
        <button
          onClick={async () => {
            const un = await renderComponent({
              name: 'render',
              module: 'Ref',
              target: document.querySelector('#ref-dom'),
              props: { $ref: ref },
              onMounted() {
                setShowRefBtn(true)
              },
            })
            unMountedRef.current.push(un)
          }}
        >
          ref
        </button>
        {
          showRefBtn && (
          <button
            onClick={() => {
              ref.current.set?.('text via ref')
            }}
          >
            set text
          </button>
          )
        }
      </div>

      <h3>Custom Node</h3>
      <div className="value">
        <div id="custom-dom" />
        <button
          onClick={async () => {
            const un = await renderComponent({
              name: 'render',
              module: 'P',
              target: document.querySelector('#custom-dom'),
              renderNode(children) {
                return <HashRouter>{children}</HashRouter>
              },
            })
            unMountedRef.current.push(un)
          }}
        >
          custom
        </button>
      </div>

      <h3>URL & Vue</h3>
      <div className="value">
        <div id="url-dom" />
        <button
          onClick={async () => {
            const un = await renderComponent({
              name: 'url',
              type: 'vue3',
              url: './dist/render-component/url.js',
              target: document.querySelector('#url-dom'),
            })
            unMountedRef.current.push(un)
          }}
        >
          url & vue
        </button>
      </div>
    </>
  )
}

export const A = () => 'A'

export const WidthProps = (props: { foo: string }) => (
  <div>{props.foo}</div>
)

export const P = () => {
  const { pathname } = useLocation()
  return (
    <div>Pathname: {pathname}</div>
  )
}

export const Ref = forwardRef((_, ref) => {
  const [text, setText] = useState('')

  useImperativeHandle(ref, () => ({
    set: (t: string) => {
      setText(t)
    },
  }))

  return (
    <p>text: {text}</p>
  )
})

export const ForVue = () => 'this will render by vue component'

export const GlobalProps = ((props) => {
  const { $store, $dispatch } = props

  return (
    <>
      <p>name: {$store.name}</p>
      <button
        onClick={() => {
          $dispatch({ name: 'app', action: 'setName' })
        }}
      >
        dispatch
      </button>
    </>
  )
}) as ComponentNode<Store>
