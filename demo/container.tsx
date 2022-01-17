import React, { Component, ComponentType } from 'react'
import { Collapse, Button } from 'antd'
import {
  ContainerProps,
  Router,
  Route,
  Switch,
} from '@variousjs/various'
import Wrapper from './wrapper'
import { Config, Store } from './types'

class Container extends Component<ContainerProps<Store, Config>> {
  onPreload = async () => {
    const { $preload } = this.props
    await $preload(['mmmmmm'])
    console.log('preload mmmmmm')
  }

  onMessage = () => {
    this.props.$postMessage('aaa', 'bbbb')
  }

  onPortals = () => {
    try {
      const unMount = this.props.$render({
        name: 'switch',
        url: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',
        props: { checked: true },
        onMounted: () => {
          console.log('ready')
        },
        // props: { name: 'bbbbb' },
        target: document.querySelector('#portals'),
      })

      setTimeout(unMount, 5000)
    } catch (e) {
      console.log(e)
    }

    // const Switch = this.props.$component('switch')
    // render((
    //   <Switch />
    // ), document.querySelector('#portals') as Element)
  }

  render() {
    const {
      $config, $component, $router,
    } = this.props
    console.log($router.location.pathname)
    const routes = $config.routes.map((item) => ({
      ...item,
      path: item.path,
      components: item.components.join().split(','),
    }))

    const X = $component('hooks')

    return (
      <Wrapper {...this.props}>
        <X $silent />
        <div>
          <Button onClick={this.onPortals}>动态加载组件</Button>
          <Button onClick={this.onMessage}>广播消息</Button>
          <Button onClick={this.onPreload}>预加载组件</Button>
        </div>
        {/* <Router> */}
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
        {/* </Router> */}
      </Wrapper>
    )
  }
}

export default Container
