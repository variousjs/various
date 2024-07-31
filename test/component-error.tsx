import React, { FC } from 'react'
import { createComponent } from '@variousjs/various'

const X = createComponent({ name: 'f' })

export const Container: FC = () => (<X />)
