import React from 'react'
import { ComponentProps } from '@variousjs/various'

export default (props: ComponentProps) => {
  const { $t } = props

  return (
    <>
      <h3>Global</h3>
      <div className="value">
        <p>title: {$t('title')}</p>
      </div>
    </>
  )
}
