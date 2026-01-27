import React, {
  Component,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ComponentProps, createComponent, getModuleInfo } from '@variousjs/various'
import { Store } from '../../types'

const Ma = createComponent({ module: 'create.A' })
const Mb = createComponent<{}, Store>({ module: 'create.B' }, ['name'])
const Mc = createComponent<{ name: string }, Store>({ module: 'create-vue-c', url: './dist/create-component/c.js', type: 'vue3' }, ['name'])
const Md = createComponent({ module: 'create.A', type: 'vue3' })
const Me = createComponent({ module: 'create-react-vue', url: './dist/create-component/c.js' })
const Mf = createComponent({ module: 'create.C' })
const Mg = createComponent({ module: 'create.B', type: 'vue3' })
const Mh = createComponent({ module: 'create.D' })
const Mi = createComponent({ module: 'create-vue-e', url: './dist/create-component/e.js', type: 'vue3' })
const Mj = createComponent({ module: 'create.Ref' })

export default (props: ComponentProps) => {
  const { module } = props.$self
  const maRef = useRef<any>(null)
  const [num, setNum] = useState(0)
  const RuntimeCreate = useMemo(() => {
    const { name } = getModuleInfo(module)
    return createComponent({ module: `${name}.E` })
  }, [module])
  const ref = useRef<any>(null)

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
        <p>for test runtime createComponent rerender</p>
        <input />
        <button onClick={() => setNum((n) => n + 1)}>add ({num})</button>
      </div>

      <h3>Class Component Ref</h3>
      <div className="value">
        <Mj $ref={ref} />
        <button onClick={() => ref.current?.add?.()}>input add</button>
      </div>

      <h3>Watch Store</h3>
      <div className="value">
        <Mb />
        <button onClick={() => props.$dispatch({ target: 'app', action: 'setName' })}>dispatch</button>
      </div>

      <h3>Vue & URL</h3>
      <div className="value">
        <Mc name={props.$store.name} />
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

export class B extends Component<ComponentProps<{}, Store>> {
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

export const E = (props: ComponentProps<{}, Store>) => (
  <p>{props.$store.name}</p>
)

export class Ref extends Component<unknown, { value: number }> {
  state = {
    value: 0,
  }

  add = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }))
  }

  render() {
    return (
      <input value={this.state.value} />
    )
  }
}
