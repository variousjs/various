import React, { Component, createRef } from 'react'
import { Button, Descriptions } from 'antd'
import { renderComponent } from '@variousjs/various'
import { HashRouter } from 'react-router-dom'

export default class extends Component {
  private unMount: () => void

  state = {
    ready: false,
  }

  inRef = createRef<any>()

  componentWillUnmount() {
    if (this.unMount) {
      this.unMount()
    }
  }

  onMount = () => {
    this.unMount = renderComponent<{ text: string }>({
      name: 'render-l',
      module: 'L',
      target: document.querySelector('#ll'),
      props: {
        text: 'll',
        $ref: this.inRef,
      },
      onMounted: () => {
        this.setState({ ready: true }, () => {
          setTimeout(() => {
            this.inRef.current?.hello()
          }, 500)
        })
      },
    })
  }

  onMountContext = () => {
    renderComponent<{ text: string }>({
      name: 'render-l',
      module: 'C',
      target: document.querySelector('#context'),
      renderNode(children) {
        return (
          <HashRouter>{children}</HashRouter>
        )
      },
    })
  }

  render() {
    return (
      <Descriptions column={1} size="small" title="K" layout="vertical" bordered>
        <Descriptions.Item label="L Ready">
          <span data-k="ready">{this.state.ready ? 'true' : 'false'}</span>
        </Descriptions.Item>

        <Descriptions.Item label="L">
          <div id="ll">-</div>
        </Descriptions.Item>

        <Descriptions.Item label="Context">
          <div id="context">-</div>
        </Descriptions.Item>

        <Descriptions.Item label="Actions">
          <Button data-k="action" size="small" type="primary" onClick={this.onMount}>Render</Button>
          <Button data-k="action-context" size="small" type="primary" onClick={this.onMountContext}>RenderContext</Button>
        </Descriptions.Item>
      </Descriptions>
    )
  }
}
