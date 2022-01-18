import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { ComponentProps } from '@variousjs/various'

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
      await $preload(['mmmmmm'])
      console.log('preload mmmmmm')
    }
  }

  render() {
    return (
      <>
        {
      this.state.items.map((item) => (
        <Link key={item} to={`/posts/${item}`}>
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
