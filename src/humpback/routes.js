import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default (Error) => class extends Component {
  static propTypes = {
    components: PropTypes.any.isRequired,
  }

  state = {
    error: undefined,
  }

  shouldComponentUpdate(props, { error }) {
    return !!error
  }

  componentDidCatch(e) {
    this.setState({ error: e.message || 'Routes Error' })
  }

  render() {
    const { error } = this.state
    const { components } = this.props

    if (error) {
      return (<Error error={error} />)
    }

    return components
  }
}
