import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon, Badge, Button, Tag } from 'antd'
import { Link } from 'react-router-dom'
import './global.less'

function Container({ store, Routes, config, dispatch }) {
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Sider>
        <h1 style={{ color: '#fff', textAlign: 'center', paddingTop: 20 }}>Humpback</h1>
        <Menu
          defaultSelectedKeys={window.location.hash.split('#/')[1] || 'default'}
          mode="inline"
          theme="dark"
        >
          {
            config.menu
              .filter(({ label }) => label)
              .map((item) => {
                const {
                  label,
                  path,
                  icon,
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
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <input />
            <div>{store.user.name}</div>
            <div style={{ margin: '0 20px' }}>
              当前已经加载完成的组件:
              <Tag>{store.LOADED_COMPONENTS}</Tag>
            </div>
            <Button onClick={() => dispatch('global', 'setNumber', Math.random().toFixed(2))}>global</Button>
            <Button onClick={() => dispatch('a', 'updateValue', Math.random().toFixed(2))}>component</Button>
            <div style={{ margin: '0 20px' }}>
              <Badge count={store.number} showZero />
            </div>
          </div>
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
  store: PropTypes.object.isRequired,
  Routes: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
}

export default Container
