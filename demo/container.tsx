import React, { Component, ComponentType } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { ContainerProps } from '@variousjs/various'
import Wrapper from './wrapper'
import { Config } from './types'

class Container extends Component<ContainerProps<Config>> {
  render() {
    const {
      $config, $component,
    } = this.props
    const routes = $config.routes.map((item) => ({
      ...item,
      path: item.path,
      components: item.components.join().split(','),
    }))

    const X = $component('x')

    return (
      <HashRouter>
        <Wrapper {...this.props}>
          <div className="component">
            <X $silent text="x" />
          </div>
          <Switch>
            {
              routes.map(({ path, components }) => {
                const component = () => components.map((name) => {
                  const C = $component(name)

                  return (
                    <div key={name} className="component">
                      <C />
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
          </Switch>
        </Wrapper>
      </HashRouter>
    )
  }
}

export default Container
