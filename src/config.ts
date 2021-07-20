export const DEFAULT_PACKAGES = {
  react: 'https://unpkg.com/react/umd/react.production.min.js',
  'react-dom': 'https://unpkg.com/react-dom/umd/react-dom.production.min.js',
  'react-router-dom': 'https://unpkg.com/react-router-dom/umd/react-router-dom.min.js',
  nycticorax: 'https://unpkg.com/nycticorax/dist/umd/index.js',
}

export const MOUNTED_COMPONENTS = 'MOUNTED_COMPONENTS'

export const IGNORE_STATIC_METHODS = [
  'name',
  'prototype',
  'length',
  'propTypes',
  'defaultProps',
  'getDerivedStateFromProps',
  'contextTypes',
  'displayName',
]

export const ERRORS = {
  '-2': 'LOADING_ERROR',
  '-1': 'DEPENDENCIES_LOADING_ERROR',
  0: 'NOT_DEFINED',
  1: 'COMPONENT_NAME_ERROR',
  2: 'SCRIPT_ERROR',
  3: 'ROUTER_ERROR',
  4: 'CONTAINER_ERROR',
}

export const ROOT_CONTAINER = '#root'
