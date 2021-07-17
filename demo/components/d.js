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
