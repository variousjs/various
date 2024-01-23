import React, { Component, memo } from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import { getConfig, createComponent } from '@variousjs/various'
import { Layout, Menu, Icon } from 'antd'
import { Config } from './types'

const C = createComponent('config')

class Container extends Component {
  page = memo(createComponent('page'))

  render() {
    const $config = getConfig() as Config

    return (
      <HashRouter>
        <Layout style={{ height: '100vh' }}>
          <Layout.Sider>
            <h1 style={{ color: '#fff', padding: '20px 0 7px 24px' }}> VariousJS </h1>
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={[window.location.hash.split('#')[1]]}
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
              <C locale="Locale" />
              <Switch>
                {
                  $config.pages.map(({ path, component }) => {
                    const P = this.page

                    return (
                      <Route
                        key={path}
                        exact
                        path={path}
                        component={() => <P type={component} />}
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
