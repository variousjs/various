import React, {
  Component,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ComponentProps, createComponent } from '@variousjs/various'
import { Store } from '../../types'

const Ma = createComponent({ name: 'create', module: 'A' })
const Mb = createComponent<Store>({ name: 'create', module: 'B' }, ['name'])
const Mc = createComponent<Store>({ name: 'create-vue-c', url: './dist/create-component/c.js', type: 'vue3' }, ['name'])
const Md = createComponent({ name: 'create', module: 'A', type: 'vue3' })
const Me = createComponent({ name: 'create-react-vue', url: './dist/create-component/c.js' })
const Mf = createComponent({ name: 'create', module: 'C' })
const Mg = createComponent({ name: 'create', module: 'C', type: 'vue3' })
const Mh = createComponent({ name: 'create', module: 'D' })
const Mi = createComponent({ name: 'create-vue-e', url: './dist/create-component/e.js', type: 'vue3' })

export default (props: ComponentProps) => {
  const maRef = useRef<any>(null)
  const [num, setNum] = useState(0)
  const RuntimeCreate = useMemo(() => createComponent({ name: 'create', module: 'E' }), [])

  return (
    <>
      <h3>Create Component</h3>
      <div className="value">
        <Ma $ref={maRef} />
        <button onClick={() => maRef.current?.set('some text')}>set text</button>
      </div>

      <h3>Runtime Create</h3>
      <div className="value">
        <RuntimeCreate />
        <input />
        <button onClick={() => setNum((n) => n + 1)}>add ({num})</button>
      </div>

      <h3>Watch Store</h3>
      <div className="value">
        <Mb />
        <button onClick={() => props.$dispatch({ name: 'app', action: 'setName' })}>dispatch</button>
      </div>

      <h3>Vue & URL</h3>
      <div className="value">
        <Mc />
      </div>

      <h3>Vue Component type Error</h3>
      <div className="value">
        <Md />
        <Mg />
      </div>

      <h3>React Component type Error</h3>
      <div className="value">
        <Me />
        <Mf />
      </div>

      <h3>React script error</h3>
      <Mh />

      <h3>Vue script error</h3>
      <Mi />
    </>
  )
}

export const A = forwardRef((_, ref) => {
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

export class B extends Component<ComponentProps<Store>> {
  render() {
    return (
      <p>name: {this.props.$store.name}</p>
    )
  }
}

export const C = 'not a component'

export const D = () => (
  // @ts-ignore cause script error
  <div>{A.bind.c}</div>
)

export const E = (props: ComponentProps<Store>) => (
  <p>{JSON.stringify(props.$store)}</p>
)
