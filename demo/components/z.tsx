import React, { Component } from 'react'
import { Button } from 'antd'
import { ComponentProps } from '@variousjs/various'

export class X extends Component<ComponentProps> {
  private unMount: () => void

  componentWillUnmount() {
    if (this.unMount) {
      this.unMount()
    }
  }

  onY = async () => {
    const { $render } = this.props
    if ($render) {
      this.unMount = $render({
        name: 'mmmmmm',
        url: './dist/m.js',
        module: 'Y',
        target: document.querySelector('#y'),
        onMounted: () => {
          console.log('ready')
        },
      })
    }
  }

  dY = () => {
    const s = this.props.$dispatch('mmmmmm.Y', 'getName')
    console.log(s)
  }

  render() {
    return (
      <>
        <Button onClick={this.dY}>子组件X</Button>
        <Button onClick={this.onY}>加载子组件 Y</Button>
        <div id="y" />
      </>
    )
  }
}

export function Y(props: any) {
  console.log(props)
  return (
    <Button>子组件Y</Button>
  )
}

Y.getName = () => 'Y'
