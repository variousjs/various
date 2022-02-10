import React, { Component } from 'react'
import { Button } from 'antd'
import { ComponentProps } from '@variousjs/various'

export class X extends Component<ComponentProps> {
  private unMountZ: () => void

  private unMountSwitch: () => void

  state = {
    zReady: false,
    switchReady: false,
  }

  componentWillUnmount() {
    if (this.unMountZ) {
      this.unMountZ()
    }
    if (this.unMountSwitch) {
      this.unMountSwitch()
    }
  }

  onZ = async () => {
    const { $render } = this.props
    if ($render) {
      this.unMountZ = $render({
        name: 'z',
        module: 'Z',
        target: document.querySelector('#z'),
        onMounted: () => {
          this.setState({ zReady: true })
        },
      })
    }
  }

  onSwitch = async () => {
    const { $render } = this.props
    if ($render) {
      this.unMountSwitch = $render({
        name: 'switch',
        url: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',
        props: { checked: true },
        target: document.querySelector('#switch'),
        onMounted: () => {
          this.setState({ switchReady: true })
        },
      })
    }
  }

  render() {
    const { zReady, switchReady } = this.state

    return (
      <>
        <p>Rendered(Z): {zReady ? 'yes' : 'no'}</p>
        <p>Rendered(switch): {switchReady ? 'yes' : 'no'}</p>
        <Button onClick={this.onZ}>$render(Z)</Button>
        <Button onClick={this.onSwitch}>$render(switch)</Button>
        <div id="z" />
        <div id="switch" />
      </>
    )
  }
}

export function Y() {
  return (
    <div style={{ fontSize: 50, margin: 0 }}>Y</div>
  )
}

export function Z() {
  return (
    <div style={{ fontSize: 50, margin: 0 }}>Z</div>
  )
}
