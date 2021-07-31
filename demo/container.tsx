/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import React, { Component, ComponentType } from 'react'
import { Route } from 'react-router-dom'
import { Collapse } from 'antd'
import { ContainerProps } from 'humpback'
import Wrapper from './wrapper'
import { Config, Store } from './types'

class Container extends Component<ContainerProps<Store, Config>> {
  render() {
    const { Router, $config, $component } = this.props
    const routes = $config.routes.map((item) => ({
      ...item,
      path: item.path,
      components: item.components.join().split(','),
    }))

    const X = $component('s')

    return (
      <Wrapper {...this.props}>
        <X />
        <Router>
          {
            routes.map(({ path, components }) => {
              const component = () => components.map((name) => {
                const C = $component(name)

                if (name === 'e') {
                  return (
                    <Collapse>
                      <Collapse.Panel header="Open">
                        <C />
                      </Collapse.Panel>
                    </Collapse>
                  )
                }

                if (name === 'b' && path.includes('next')) {
                  return (
                    <div style={{ display: 'inline-block', width: 300 }}>
                      silent component
                      <C silent />
                    </div>
                  )
                }

                const props = name === 'a' ? { name, test: 123 } : {}

                return (
                  <div style={{ display: 'inline-block', width: 300 }}>
                    <C {...props} />
                  </div>
                )
              })

              return (
                <Route
                  key={path as string}
                  exact
                  path={path}
                  component={component as unknown as ComponentType}
                />
              )
            })
          }
        </Router>
      </Wrapper>
    )
  }
}

export default Container
