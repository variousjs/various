import React, { FC } from 'react'
import { ComponentProps, getConfig } from '@variousjs/various'
import { Store, Config } from '../types'

const X: FC<ComponentProps<Store>> = (props) => {
  const $config = getConfig() as Config
  return (
    <>
      <p>Store: <span id="i-store-name">{props.$store.user.name}</span></p>
      <p>Config: <span id="config-menu">{$config.menu.map((t) => t.label).join()}</span></p>
    </>
  )
}

export default X
