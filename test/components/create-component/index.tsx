import React, {
  Component,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { ComponentProps, createComponent } from '@variousjs/various'
import { Store } from '../../types'

const Ma = createComponent({ name: 'create', module: 'A' })
const Mb = createComponent<Store>({ name: 'create', module: 'B' }, ['name'])
const Mc = createComponent<Store>({ name: 'create-vue-c', url: './dist/create-component/c.js', type: 'vue3' }, ['name'])

export default (props: ComponentProps) => {
  const maRef = useRef<any>(null)

  return (
    <>
      <h3>Create Component</h3>
      <div className="value">
        <Ma $ref={maRef} />
        <button onClick={() => maRef.current?.set('some text')}>set text</button>
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
