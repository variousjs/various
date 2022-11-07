import React, { Component, ComponentType, memo } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { getConfig, createComponent } from '@variousjs/various'
import { Button } from 'antd'
import Wrapper from './wrapper'
import { Config } from './types'

class Container extends Component {
  state = {
    n: 0,
  }

  xx = memo(createComponent('x'))

  render() {
    const { n } = this.state
    const $config = getConfig() as Config
    const X = this.xx

    return (
      <HashRouter>
        <Wrapper {...this.props}>
          <div className="component">
            <div data-title="X" className="title">X</div>
            <p>{n}</p>
            <Button onClick={() => this.setState({ n: n + 1 })}>Set</Button>
            <X $silent />
          </div>
          <Switch>
            {
              $config.routes.map(({ path, components }) => {
                const component = () => components.map((name) => {
                  const C = createComponent(name)

                  return (
                    <div key={name} className="component">
                      <div data-title={name} className="title">{name}</div>
                      <C name={name} $silent={name === 'timeout-error'} />
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
