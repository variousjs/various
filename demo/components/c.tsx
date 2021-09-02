/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { ComponentProps } from 'humpback'

export default class extends Component<ComponentProps> {
  state = {
    items: [
      1,
      2,
      3,
      4,
      5,
    ],
  }

  onPreload = async () => {
    const { $preload } = this.props
    if ($preload) {
      await $preload(['photo'])
      console.log('preload photo')
    }
  }

  render() {
    return (
      <>
        {
      this.state.items.map((item, i) => (
        <Link key={i} to={`/posts/${item}`}>
          /posts/
          {item}
        </Link>
      ))
      }
        <Button onClick={this.onPreload}>预加载组件</Button>
      </>
    )
  }
}
