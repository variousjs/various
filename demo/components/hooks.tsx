/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React, { FC, useCallback } from 'react'
import { Button, message } from 'antd'
import { ComponentProps } from 'humpback'
import { Store } from '../types'

const H: FC<ComponentProps<Store>> & { [key: string]: any } = (props) => {
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

  return (
    <div>
      <h3>Hooks</h3>
      <p>
        全局值:
        {props.$store.user.name}
      </p>
      <p>
        mounted:
        {props.$mounted.join(', ')}
      </p>
      <Button onClick={onSet}>更新全局</Button>
      <Button onClick={onGet}>调用自身方法</Button>
    </div>
  )
}

H.getName = () => 'name'

export default H
