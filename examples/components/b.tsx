import React, { FC, useState, useMemo } from 'react'
import { Button, Input } from 'antd'
import { ComponentProps, Store, Invoker, createComponent } from '@variousjs/various'
import { Store as GlobalStore } from '../types'

type S = { value: string }

const { createStore, connect, getStore } = new Store<S>()

createStore({ value: 'b' })

const B: FC<S & ComponentProps> & { getValue: Invoker } = (props) => {
  const [de, setDe] = useState('')

  const setA = async () => {
    await props.$dispatch('a', 'updateValue', 'ab')
  }

  const setGlobal = async () => {
    await props.$dispatch('store', 'updateUserName', 'B')
  }

  const setE = async () => {
    try {
      await props.$dispatch('no-exist', 'some method')
    } catch (e) {
      setDe((e as Error).message)
    }
  }

  const D = useMemo(() => createComponent('b.D'), [])

  return (
    <>
      <p>Dispatch Error: {de}</p>
      <Button onClick={setA}>$dispatch(a)</Button>
      <Button onClick={setE}>$dispatch(no-exist)</Button>
      <Button id="b-dispatch-global" onClick={setGlobal}>$dispatch(global)</Button>
      <div>
        <D />
      </div>
    </>
  )
}

B.getValue = () => getStore().value

export const C = connect('value')(B)

export const D:FC<ComponentProps<GlobalStore>> = (props) => (
  <div>
    <h2>D</h2>
    <p>{props.$store.locale}</p>
    <Input />
  </div>
)
