import React, { Component, FC } from 'react'
import { Button } from 'antd'
import { ComponentProps, preloadComponents, onComponentMounted } from '@variousjs/various'

export class X extends Component<ComponentProps> {
  private unMountZ: () => void

  private unMountSwitch: () => void

  un: Function

  un2: Function

  state = {
    zReady: false,
    switchReady: false,
    hPreloaded: false,
    readys: [] as string[],
  }

  componentWillUnmount() {
    if (this.unMountZ) {
      this.unMountZ()
    }
    if (this.unMountSwitch) {
      this.unMountSwitch()
    }
    this.un()
    this.un2()
  }

  componentDidMount() {
    this.un = onComponentMounted('x', () => {
      const { readys } = this.state
      this.setState({ readys: readys.concat(['x']) })
    })
    this.un2 = onComponentMounted('switch', () => {
      const { readys } = this.state
      this.setState({ readys: readys.concat(['switch']) })
    })
  }

  removeZ = () => {
    if (this.unMountZ) {
      this.unMountZ()
      this.setState({ zReady: false })
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
        url: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',
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
    const { zReady, switchReady, hPreloaded, readys } = this.state

    return (
      <>
        <p>Rendered(Z): <span id="render-z">{zReady ? 'yes' : 'no'}</span></p>
        <p>Rendered(switch): <span id="render-switch">{switchReady ? 'yes' : 'no'}</span></p>
        <p>Preloaded(H): <span id="preload-h">{hPreloaded ? 'yes' : 'no'}</span></p>
        <p id="readys">readys: {readys.join()}</p>
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
