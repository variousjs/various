/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

export default class extends Component {
  render() {
    const { id } = this.props.$router.match.params
    return (
      <>
        <input />
        <p>
          current:
          {id}
        </p>
      </>
    )
  }
}
