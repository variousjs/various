import React, { Component } from 'react'
import Table from 'rc-table'
import Tb from 'table'

export default class extends Component {
  render() {
    console.log('e', this.props)

    return (
      <>
        <Table />
        <Tb />
      </>
    )
  }
}
