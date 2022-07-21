import React, { FC, useState } from 'react'
import { Button } from 'antd'
import { ComponentProps, Store, Connect as CT, Invoker } from '@variousjs/various'

type S = { value: string }
type Connect = CT<S>

const { createStore, connect, getStore } = new Store<S>()

createStore({ value: 'b' })

const B: FC<Connect & ComponentProps> & { getValue: Invoker } = (props) => {
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

  return (
    <>
      <p>Dispatch Error: {de}</p>
      <Button onClick={setA}>$dispatch(a)</Button>
      <Button onClick={setE}>$dispatch(no-exist)</Button>
      <Button id="b-dispatch-global" onClick={setGlobal}>$dispatch(global)</Button>
    </>
  )
}

B.getValue = () => getStore().value

export const C = connect('value')(B)
