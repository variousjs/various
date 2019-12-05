import React, { Component } from 'react'
import { Layout, Icon } from 'antd'
import PropTypes from 'prop-types'
import Menu from './menu'
import Routes from './routes'

export default class extends Component {
  static propTypes = {
    actions: PropTypes.object,
    routes: PropTypes.array,
  }

  static defaultProps = {
    routes: [],
    actions: {},
  }

  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    const { collapsed } = this.state
    const { routes, actions } = this.props

    return (
      <Layout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu collapsed={collapsed} routes={routes} />
        </Layout.Sider>
        <Layout>
          <Layout.Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
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
}
