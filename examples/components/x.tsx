import React, { FC, useState } from 'react'
import { Button, DatePicker } from 'antd'
import { ComponentProps, getMountedComponents } from '@variousjs/various'
import moment from 'moment'
import { Store } from '../types'

const X: FC<ComponentProps<Store>> = (props) => {
  const [m, setM] = useState<string[]>([])

  const onSet = async () => {
    await props.$dispatch('store', 'updateUserName', 'X')
  }

  const onPost = () => {
    props.$postMessage('X')
  }

  const onMounted = () => {
    const res = getMountedComponents()
    setM(res)
  }

  return (
    <>
      <p>Store: {props.$store.user.name}</p>
      <p>MountedComponents: <span id="mounted-components">{m.sort().join()}</span></p>
      <Button onClick={onMounted}>$getMountedComponents</Button>
      <Button id="x-dispatch-global" onClick={onSet}>$dispatch(global)</Button>
      <Button id="x-message" onClick={onPost}>$postMessage</Button>
      <DatePicker
        id="date-picker"
        defaultValue={moment('2022-02-15')}
        format="MMMM Do YYYY"
      />
    </>
  )
}

export default X
