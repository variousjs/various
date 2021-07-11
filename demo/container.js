/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Collapse } from 'antd'
import Wrapper from './wrapper'
import './global.less'

export default class extends Component {
  render() {
    console.log('global', this.props)

    const { Router, $config, $component } = this.props
    const routes = $config.routes.map((item) => ({
      ...item,
      path: item.path,
      components: item.components.join().split(','),
    }))

    return (
      <Wrapper {...this.props}>
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

                if (name === 'f') {
                  return (
                    <div>
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
                  key={path}
                  exact
                  path={path}
                  component={component}
                />
              )
            })
          }
        </Router>
      </Wrapper>
    )
  }
}
