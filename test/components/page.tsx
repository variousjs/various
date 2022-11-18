import React, { Component } from 'react'
import { ComponentProps } from '@variousjs/various'
import { getPageComponents } from '../helper'

export default class extends Component<ComponentProps & { type: string }> {
  components = getPageComponents(this.props.type)

  render() {
    return (
      <div>
        {
          Object.keys(this.components).map((name) => {
            const C = this.components[name]

            return (
              <div className="component">
                {
                  this.props.type === 'create'
                    ? <h3>{name}</h3>
                    : null
                }
                <C $silent={name === 'create-slient'} />
              </div>
            )
          })
        }
      </div>
    )
  }
}
