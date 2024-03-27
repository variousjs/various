import React, { Component } from 'react'
import { Button, Descriptions } from 'antd'
import { renderComponent } from '@variousjs/various'

export default class extends Component {
  private unMount: () => void

  state = {
    ready: false,
  }

  componentWillUnmount() {
    if (this.unMount) {
      this.unMount()
    }
  }

  onMount = () => {
    this.unMount = renderComponent({
      name: 'render-l',
      module: 'L',
      target: document.querySelector('#ll'),
      props: {
        text: 'll',
      },
      onMounted: () => {
        this.setState({ ready: true })
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

        <Descriptions.Item label="Actions">
          <Button data-k="action" size="small" type="primary" onClick={this.onMount}>Render</Button>
        </Descriptions.Item>
      </Descriptions>
    )
  }
}
