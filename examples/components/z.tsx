import React, { Component, FC } from 'react'
import { Button } from 'antd'
import { ComponentProps, preloadComponents } from '@variousjs/various'

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

  removeZ = () => {
    if (this.unMountZ) {
      this.unMountZ()
    }
  }

  onZ = async () => {
    const { $render } = this.props
    if ($render) {
      this.unMountZ = $render({
        name: 'z',
        module: 'Z',
        target: document.querySelector('#z'),
        props: {
          unMount: this.removeZ,
        },
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
    await preloadComponents(['h'])
    this.setState({ hPreloaded: true })
  }

  render() {
    const { zReady, switchReady, hPreloaded } = this.state

    return (
      <>
        <p>Rendered(Z): <span id="render-z">{zReady ? 'yes' : 'no'}</span></p>
        <p>Rendered(switch): <span id="render-switch">{switchReady ? 'yes' : 'no'}</span></p>
        <p>Preloaded(H): <span id="preload-h">{hPreloaded ? 'yes' : 'no'}</span></p>
        <Button onClick={this.onZ}>$render(Z)</Button>
        <Button onClick={this.onSwitch}>$render(switch)</Button>
        <Button onClick={this.onH}>$preload(H)</Button>
        <div id="z" />
        <div id="switch" />
        <div className="component-loaded" />
      </>
    )
  }
}

export const Z: FC<{ unMount: () => void }> = (props) => (
  <div style={{ borderTop: '1px solid #eee', marginTop: 10, paddingTop: 10 }}>
    <Button onClick={props.unMount}>remove(Z)</Button>
  </div>
)

export const A = 'a'
