import React, { FC } from 'react'
import { ComponentProps } from '@variousjs/various'
import { Store, Config } from '../types'

const X: FC<ComponentProps<Store, Config>> = (props) => (
  <>
    <p>Store: {props.$store.user.name}</p>
    <p>Config: {props.$config.menu.map((t) => t.label).join()}</p>
  </>
)

export default X
