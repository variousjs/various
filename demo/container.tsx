import React, { Component, ComponentType } from 'react'
import { Collapse } from 'antd'
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

    const X = $component('hooks')

    return (
      <HashRouter>
        <Wrapper {...this.props}>
          <X $silent />
          <Switch>
            {
            routes.map(({ path, components }) => {
              const component = () => components.map((name) => {
                const C = $component(name)

                if (name === 'e') {
                  return (
                    <Collapse key={name}>
                      <Collapse.Panel header="Open">
                        <C />
                      </Collapse.Panel>
                    </Collapse>
                  )
                }

                if (name === 'b' && path.includes('next')) {
                  return (
                    <div key={name} style={{ display: 'inline-block', width: 300 }}>
                      silent component
                      <C $silent />
                    </div>
                  )
                }

                const props = name === 'a' ? { name, test: 123 } : {}

                return (
                  <div key={name} style={{ display: 'inline-block', width: 300 }}>
                    <C {...props} />
                  </div>
                )
              })

              const N = component as unknown as ComponentType

              return (
                <Route
                  key={path as string}
                  exact
                  path={path}
                  component={path === '/ttt' ? N : undefined}
                >
                  {
                    path === '/ttt' ? null : <N />
                  }
                </Route>
              )
            })
          }
            <Route path="*">
              <div style={{ fontSize: 100 }}>404</div>
            </Route>
          </Switch>
        </Wrapper>
      </HashRouter>
    )
  }
}

export default Container
