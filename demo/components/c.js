import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  state = {
    items: [
      1,
      2,
      3,
      4,
      5,
    ],
  }

  render() {
    return this.state.items.map((item) => (
      <Link to={`/posts/${item}`}>
        /posts/
        {item}
      </Link>
    ))
  }
}
