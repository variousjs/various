export const DEFAULT_PACKAGES = {
  react: 'https://unpkg.com/react/umd/react.development.js',
  'react-dom': 'https://unpkg.com/react-dom/umd/react-dom.development.js',
  'react-router-dom': 'https://unpkg.com/react-router-dom/umd/react-router-dom.js',
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

export enum ERROR_TYPE {
  LOADING_ERROR = 'LOADING_ERROR',
  DEPENDENCIES_LOADING_ERROR = 'DEPENDENCIES_LOADING_ERROR',
  NOT_DEFINED = 'NOT_DEFINED',
  INVALID_COMPONENT = 'INVALID_COMPONENT',
  SCRIPT_ERROR = 'SCRIPT_ERROR',
  ROUTER_ERROR = 'ROUTER_ERROR',
  CONTAINER_ERROR = 'CONTAINER_ERROR',
}

export const ROOT_CONTAINER = '#root'

export const RETRY_COUNT = 1
