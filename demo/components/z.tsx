import React, { Component, FC, useState } from 'react'
import { Button } from 'antd'
import { ComponentProps } from '@variousjs/various'
import { Store } from '../types'

export class X extends Component<ComponentProps> {
  private unMountZ: () => void

  private unMountSwitch: () => void

  state = {
    zReady: false,
    switchReady: false,
    hPreloaded: false,
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
        url: './lib/switch.js',
        props: { checked: true },
        target: document.querySelector('#switch'),
        onMounted: () => {
          this.setState({ switchReady: true })
        },
      })
    }
  }

  onH = async () => {
    await this.props.$preload(['h'])
    this.setState({ hPreloaded: true })
  }

  render() {
    const { zReady, switchReady, hPreloaded } = this.state

    return (
      <>
        <p>Rendered(Z): {zReady ? 'yes' : 'no'}</p>
        <p>Rendered(switch): {switchReady ? 'yes' : 'no'}</p>
        <p>Preloaded(H): {hPreloaded ? 'yes' : 'no'}</p>
        <Button onClick={this.onZ}>$render(Z)</Button>
        <Button onClick={this.onSwitch}>$render(switch)</Button>
        <Button onClick={this.onH}>$preload(H)</Button>
        <div id="z" />
        <div id="switch" />
      </>
    )
  }
}

export const Z: FC<ComponentProps<Store>> = (props) => {
  const [l, setL] = useState(false)

  return (
    <div style={{ borderTop: '1px solid #eee', marginTop: 10, paddingTop: 10 }}>
      <p>Store: {props.$store.user.name}</p>
      <p>ComponentLoaded(H): {l ? 'yes' : 'no'}</p>
      <Button
        onClick={() => {
          if (props.$isComponentLoaded('h')) {
            setL(true)
          }
        }}
      >
        $isComponentLoaded(H)
      </Button>
    </div>
  )
}
