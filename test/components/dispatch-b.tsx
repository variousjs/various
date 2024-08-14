import React, { useState } from 'react'
import { Button, Descriptions } from 'antd'
import { ComponentNode, Nycticorax } from '@variousjs/various'
import { Store } from '../types'

type S = { value: string }

const { createStore, connect, getStore } = new Nycticorax<S>()

createStore({ value: 'b' })

const B = ((props) => {
  const [de, setDe] = useState('')

  const setA = async () => {
    await props.$dispatch({
      name: 'dispatch-a',
      action: 'updateValue',
      value: 'b',
    })
  }

  const setAN = async () => {
    try {
      await props.$dispatch({
        name: 'dispatch-a',
        action: 'nonexist',
        value: undefined,
      })
    } catch (e) {
      setDe((e as Error).message)
    }
  }

  const setGlobal = async () => {
    await props.$dispatch({
      name: 'app',
      action: 'setName',
      value: 'various',
    })
  }

  const setE = async () => {
    try {
      await props.$dispatch({
        name: 'no-exist',
        action: 'some method',
        value: undefined,
      })
    } catch (e) {
      setDe((e as Error).message)
    }
  }

  const setBlock = () => {
    props.$dispatch({
      name: 'dispatch-a',
      action: 'block',
      value: undefined,
    })
  }

  return (
    <Descriptions column={1} title="B" size="small" layout="vertical" bordered>
      <Descriptions.Item label="Error">
        <span data-b="error">{de || '-'}</span>
      </Descriptions.Item>

      <Descriptions.Item label="Actions">
        <Button data-b="action-a" type="primary" size="small" onClick={setA}>A Value</Button>
        <Button data-b="action-nonexist" type="primary" size="small" onClick={setE}>Nonexist</Button>
        <Button data-b="action-store" type="primary" size="small" onClick={setGlobal}>Store</Button>
        <Button data-b="action-a-nonexist" type="primary" size="small" onClick={setAN}>A Nonexist</Button>
        <Button data-b="action-a-block" type="primary" size="small" onClick={setBlock}>A Block</Button>
      </Descriptions.Item>
    </Descriptions>
  )
}) as ComponentNode<Store, S>

B.getValue = () => getStore('value')

export default connect('value')(B)
