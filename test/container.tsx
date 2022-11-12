import React, { Component, memo } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { getConfig, createComponent } from '@variousjs/various'
import Wrapper from './wrapper'
import { Config } from './types'

class Container extends Component {
  pages = (getConfig() as Config).pages.reduce((prev, current) => {
    // eslint-disable-next-line no-param-reassign
    prev[current.component] = memo(createComponent(current.component))
    return prev
  }, {} as Record<string, ReturnType<typeof createComponent>>)

  render() {
    const $config = getConfig() as Config

    return (
      <HashRouter>
        <Wrapper {...this.props}>
          <Switch>
            {
              $config.pages.map(({ path, component }) => {
                const P = this.pages[component]

                return (
                  <Route
                    key={path}
                    exact
                    path={path}
                    component={P}
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
