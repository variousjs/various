import React, { Component, memo } from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import { getConfig, createComponent } from '@variousjs/various'
import { Layout, Menu, Icon } from 'antd'
import { Config } from './types'

class Container extends Component {
  pages = (getConfig() as Config).pages.reduce((prev, current) => {
    // eslint-disable-next-line no-param-reassign
    prev[current.component] = memo(createComponent(current.component))
    return prev
  }, {} as Record<string, ReturnType<typeof createComponent>>)

  global = memo(createComponent('global'))

  render() {
    const $config = getConfig() as Config
    const G = this.global

    return (
      <HashRouter>
        <Layout style={{ height: '100vh' }}>
          <Layout.Sider>
            <h1 style={{ color: '#fff', padding: '20px 0 7px 24px' }}> VariousJS </h1>
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={['/dispatch']}
            >
              {
            $config.pages.map((item) => {
              const { label, path, icon } = item

              return (
                <Menu.Item
                  key={path}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Icon type={icon} />
                  <Link to={path}>{label}</Link>
                </Menu.Item>
              )
            })
          }
            </Menu>
          </Layout.Sider>
          <Layout>
            <Layout.Content style={{ padding: '20px 10px 20px 20px' }}>
              <G />
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
              <div style={{ height: 10 }} />
            </Layout.Content>
          </Layout>
        </Layout>
      </HashRouter>
    )
  }
}

export default Container
