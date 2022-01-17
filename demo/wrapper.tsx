import React, { FC } from 'react'
import {
  Layout, Menu, Icon, Input,
} from 'antd'
import { ContainerProps, Link } from '@variousjs/various'
import { Config } from './types'

const W: FC<ContainerProps<Config>> = (props) => {
  const {
    children,
    $config,
  } = props

  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Sider>
        <h1 style={{ color: '#fff', textAlign: 'center', paddingTop: 20 }}> VariousJS </h1>
        <Menu
          defaultSelectedKeys={window.location.hash.split('#/')[1] || 'default'}
          mode="inline"
          theme="dark"
        >
          {
              $config.menu
                .filter(({ label }) => label)
                .map((item) => {
                  const {
                    label,
                    path,
                    icon,
                  } = item

                  return (
                    <Menu.Item
                      key={path.split('/')[1] || 'default'}
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
        <Layout.Header style={{ background: '#fff', padding: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Input style={{ width: 100 }} />
          </div>
        </Layout.Header>
        <Layout.Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
          }}
        >
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default W
