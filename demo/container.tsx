/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import React, { Component, ComponentType } from 'react'
import { Route } from 'react-router-dom'
import { Collapse, Button } from 'antd'
import { ContainerProps } from 'humpback'
import Wrapper from './wrapper'
import { Config, Store } from './types'

class Container extends Component<ContainerProps<Store, Config>> {
  onPortals = () => {
    // switch: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',

    try {
      const unMount = this.props.$render({
        name: 'switch',
        url: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',
        props: { checked: true },
        // onMounted: () => {
        //   console.log('ready')
        // },
        // props: { name: 'bbbbb' },
        target: document.querySelector('#portals'),
      })

      console.log(unMount)

      // setTimeout(unMount, 5000)
    } catch (e) {
      console.log(e)
    }

    // const Switch = this.props.$component('switch')
    // render((
    //   <Switch />
    // ), document.querySelector('#portals') as Element)
  }

  render() {
    const { Router, $config, $component } = this.props
    const routes = $config.routes.map((item) => ({
      ...item,
      path: item.path,
      components: item.components.join().split(','),
    }))

    const X = $component('hooks')

    return (
      <Wrapper {...this.props}>
        <X />
        <div>
          <h3>动态组件</h3>
          <Button onClick={this.onPortals}>加载组件</Button>
        </div>
        <Router>
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
                      <C silent />
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
