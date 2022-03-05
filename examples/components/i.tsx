import React, { FC } from 'react'
import { ComponentProps } from '@variousjs/various'
import { Store, Config } from '../types'

const X: FC<ComponentProps<Store, Config>> = (props) => (
  <>
    <p>Store: <span id="i-store-name">{props.$store.user.name}</span></p>
    <p>Config: <span id="config-menu">{props.$config.menu.map((t) => t.label).join()}</span></p>
  </>
)

export default X
