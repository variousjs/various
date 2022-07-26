import React, { FC, ReactNode } from 'react'
import {
  Layout, Menu, Icon, Input,
} from 'antd'
import { Link } from 'react-router-dom'
import { ContainerProps } from '@variousjs/various'
import { Config } from './types'

const W: FC<ContainerProps<Config> & { children: ReactNode }> = (props) => {
  const { children, $config } = props

  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Sider>
        <h1 style={{ color: '#fff', padding: '20px 0 7px 24px' }}> VariousJS </h1>
        <Menu
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
        <Layout.Content style={{ padding: '20px 10px 20px 20px' }}>
          <div className="component">
            <div className="title">Container</div>
            <Input style={{ width: 200 }} defaultValue="Container state keeping" />
          </div>
          {children}
          <div style={{ height: 10 }} />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default W
