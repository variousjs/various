import React from 'react'
import { Menu, Icon } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function MenuItems({ routes }) {
  return (
    <Menu
      defaultSelectedKeys={window.location.hash.split('#/')[1] || 'default'}
      mode="inline"
      theme="dark"
    >
      {
        routes
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
  )
}

MenuItems.propTypes = {
  routes: PropTypes.array.isRequired,
}

export default MenuItems
