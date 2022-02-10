import React, { FC, useState } from 'react'
import { Button, DatePicker } from 'antd'
import { ComponentProps } from '@variousjs/various'
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
    const res = props.$getMountedComponents()
    setM(res)
  }

  return (
    <>
      <p>Store: {props.$store.user.name}</p>
      <p>MountedComponents: {m.join()}</p>
      <Button onClick={onMounted}>$getMountedComponents</Button>
      <Button onClick={onSet}>$dispatch(global)</Button>
      <Button onClick={onPost}>$postMessage</Button>
      <DatePicker
        defaultValue={moment()}
        format="MMMM Do YYYY"
      />
    </>
  )
}

export default X
