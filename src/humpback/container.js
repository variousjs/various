import React from 'react'
import { Layout } from 'antd'
import PropTypes from 'prop-types'
import Menu from './menu'
import Routes from './routes'

function Container({ methods, routes }) {
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
          <Routes routes={routes} methods={methods} />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

Container.propTypes = {
  methods: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
}

export default Container
