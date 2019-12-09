import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'
import routesConfig from './routes'
import { Link } from 'react-router-dom'

function Container({ state, Routes }) {
  return (
    <Layout>
      <Layout.Sider>
        <Menu
          defaultSelectedKeys={window.location.hash.split('#/')[1] || 'default'}
          mode="inline"
          theme="dark"
        >
          {
            routesConfig
              .filter(({ label }) => label)
              .map((item) => {
                const {
                  label,
                  path,
                  icon,
                  // children = [],
                } = item;

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
          <div>{state.user.name}</div>
        </Layout.Header>
        <Layout.Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
          }}
        >
          <Routes />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

Container.propTypes = {
  state: PropTypes.object.isRequired,
  Routes: PropTypes.element.isRequired,
}

export default Container
