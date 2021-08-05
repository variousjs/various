/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react'
import Table from 'rc-table'
import Tb from 'table'

export default class extends Component {
  render() {
    window.console.log('e', this.props)

    return (
      <>
        <Table />
        <Tb />
      </>
    )
  }
}
