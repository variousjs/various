/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Button } from 'antd'
import { ComponentProps } from 'humpback'

export default class extends Component<ComponentProps> {
  onPortals = () => {
    try {
      const { $render } = this.props
      if ($render) {
        const unMount = $render({
          name: 'switch',
          url: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',
          props: { checked: true },
          target: document.querySelector('#portals'),
          onMounted: () => {
            console.log('?????')
          },
        })

        setTimeout(unMount, 5000)
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const id = this.props.$router?.match?.params?.id
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
