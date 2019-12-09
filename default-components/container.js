import React from 'react'
import PropTypes from 'prop-types'

function Container({ state, Routes, links }) {

}

Container.propTypes = {
  state: PropTypes.object.isRequired,
  Routes: PropTypes.element.isRequired,
  links: PropTypes.array.isRequired,
}
