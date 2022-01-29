import React, { FC, useCallback } from 'react'
import { Button, message, DatePicker } from 'antd'
import { ComponentProps, OnMessage } from '@variousjs/various'
import { Store } from '../types'

const H: FC<ComponentProps<Store>> & {
  $onMessage: OnMessage,
  getName: () => string,
} = (props) => {
  const onSet = useCallback(async () => {
    await props.$dispatch('store', 'updateUserName', 'updated from hooks')
    message.success('updated')
  }, [props])

  const onGet = useCallback(() => {
    const name = props.$dispatch('hooks', 'getName')
    if (typeof name === 'string') {
      message.info(name)
    }
  }, [props])

  const onPost = () => {
    props.$postMessage('from hooks')
  }

  const onMounted = () => {
    const res = props.$getMountedComponents()
    console.log(res)
  }

  return (
    <div>
      <h3>Hooks</h3>
      <p>
        全局值:
        {props.$store.user.name}
      </p>
      <Button onClick={onMounted}>获取当前加载组件</Button>
      <Button onClick={onSet}>更新全局</Button>
      <Button onClick={onGet}>调用自身方法</Button>
      <Button onClick={onPost}>广播消息（组件）</Button>
      <DatePicker />
    </div>
  )
}

H.getName = () => 'name'

H.$onMessage = (params) => {
  console.log(params)
}

export default H
