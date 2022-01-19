import React, { Component } from 'react'
import { Button } from 'antd'
import { ComponentProps } from '@variousjs/various'
import { RouteComponentProps, withRouter } from 'react-router-dom'

class D extends Component<ComponentProps & RouteComponentProps<{ id: string }>> {
  private unMount: () => void

  componentWillUnmount() {
    if (this.unMount) {
      this.unMount()
    }
  }

  onPortals = () => {
    try {
      const { $render } = this.props
      if ($render) {
        this.unMount = $render({
          name: 'switch',
          url: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',
          props: { checked: true },
          target: document.querySelector('#portals'),
          onMounted: () => {
            console.log('ready')
          },
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { id } = this.props.match.params
    return (
      <>
        <div id="portals" />
        <Button onClick={this.onPortals}>加载组件</Button>
        <input />
        <p>
          current:
          {id}
        </p>
      </>
    )
  }
}

export default withRouter(D)
