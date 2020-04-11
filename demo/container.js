import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Wrapper from './wrapper'
import './global.less'

export default class extends Component {
  render() {
    const { Routes, CONFIG, componentCreator } = this.props

    const rs = CONFIG.routes
      .map((item) => ({
        ...item,
        path: item.path,
        components: item.components.join().split(',')
      }))
      .map(({ path, components }) => {
        const component = () => components.map((name) => {
          const C = componentCreator(name)
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

    return (
      <Wrapper {...this.props}>
        <Routes components={rs} />
      </Wrapper>
    )
  }
}
