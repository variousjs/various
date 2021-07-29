/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { ComponentProps } from 'humpback'

export default class extends Component<ComponentProps> {
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
