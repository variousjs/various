import React from 'react'
import { Layout } from 'antd'
import PropTypes from 'prop-types'
import Menu from './menu'
import Routes from './routes'

function Container({ actions, routes }) {
  return (
    <Layout>
      <Layout.Sider>
        <Menu routes={routes} />
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ background: '#fff', padding: 0 }}>
        </Layout.Header>
        <Layout.Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
          }}
        >
          <Routes routes={routes} actions={actions} />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

Container.propTypes = {
  actions: PropTypes.object,
  routes: PropTypes.array,
}

Container.defaultProps = {
  routes: [],
  actions: {},
}

export default Container
