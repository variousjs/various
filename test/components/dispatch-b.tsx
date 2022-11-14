import React, { FC, useState } from 'react'
import { Button, Descriptions } from 'antd'
import { ComponentProps, Store, Invoker } from '@variousjs/various'
import { Store as GlobalStore } from '../types'

type S = { value: string }

const { createStore, connect, getStore } = new Store<S>()

createStore({ value: 'b' })

const B: FC<S & ComponentProps<GlobalStore>> & { getValue: Invoker } = (props) => {
  const [de, setDe] = useState('')

  const setA = async () => {
    await props.$dispatch('dispatch-a', 'updateValue', 'ab')
  }

  const setGlobal = async () => {
    await props.$dispatch('store', 'setName', 'various')
  }

  const setE = async () => {
    try {
      await props.$dispatch('no-exist', 'some method')
    } catch (e) {
      setDe((e as Error).message)
    }
  }

  return (
    <Descriptions column={1} title="B" size="small" layout="vertical" bordered>
      <Descriptions.Item label="B Error">
        <span data-name="b-error">{de || '-'}</span>
      </Descriptions.Item>

      <Descriptions.Item label="Actions">
        <Button type="primary" size="small" onClick={setA}>A Value</Button>
        <Button type="primary" size="small" onClick={setE}>Nonexist</Button>
        <Button type="primary" size="small" onClick={setGlobal}>Store</Button>
      </Descriptions.Item>
    </Descriptions>
  )
}

B.getValue = () => getStore().value

export default connect('value')(B)
