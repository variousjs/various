import React from 'react'

export const IGNORE_STATIC_METHODS = [
  'name',
  'prototype',
  'length',
  'propTypes',
  'defaultProps',
]

export const LOADED_COMPONENTS = 'LOADED_COMPONENTS'

export const Loading = () => (
  <h3>Loading</h3>
)

export const Error = ({ error }) => (
  <h3>{error}</h3>
)

export const Container = () => (
  <h3>Nothing</h3>
)
