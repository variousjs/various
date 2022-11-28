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
            const props = {} as Record<string, any>

            if (name === 'create-slient') {
              props.$silent = true
            }

            return (
              <div className="component">
                {
                  this.props.type === 'create'
                    ? <h3>{name}</h3>
                    : null
                }
                <C {...props} />
              </div>
            )
          })
        }
      </div>
    )
  }
}
