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
    const { Routes, config, componentCreator } = this.props
    const routes = config.routes.map((item) => ({
      ...item,
      path: item.path,
      components: item.components.join().split(','),
    }))

    return (
      <Wrapper {...this.props}>
        <Routes>
          {
            routes.map(({ path, components }) => {
              const component = () => components.map((name) => {
                const C = componentCreator(name)

                if (name === 'e') {
                  return (
                    <Collapse>
                      <Collapse.Panel header="Open">
                        <C />
                      </Collapse.Panel>
                    </Collapse>
                  )
                }

                return (
                  <div style={{ display: 'inline-block', width: 300 }}>
                    <C />
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
        </Routes>
      </Wrapper>
    )
  }
}
