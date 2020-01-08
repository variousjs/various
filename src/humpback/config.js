import React from 'react'

export const IGNORE_STATIC_METHODS = [
  'name',
  'prototype',
  'length',
  'propTypes',
  'defaultProps',
  'getDerivedStateFromProps',
]

export const MOUNTED_COMPONENTS = 'MOUNTED_COMPONENTS'

export const COMPONENT_PACKAGES = 'COMPONENT_PACKAGES'

export const Loading = () => (
  <h3>Loading</h3>
)

export const Error = ({ error, reload }) => ( // eslint-disable-line react/prop-types
  <>
    <h3>{error}</h3>
    <button onClick={reload}>reload</button>
  </>
)

export const Container = () => (
  <h3>Nothing</h3>
)
