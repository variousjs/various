declare const process : {
  env: {
    NODE_ENV: string,
  },
}

export const DEFAULT_PACKAGES = {
  react: 'https://unpkg.com/react@17.0.2/umd/react.development.js',
  'react-dom': 'https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js',
}

export const MOUNTED_COMPONENTS = Symbol('MOUNTED_COMPONENTS')

export const MESSAGE_KEY = Symbol('MESSAGE_KEY')

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
  CONTAINER_ERROR = 'CONTAINER_ERROR',
}

export const ROOT_CONTAINER = '#root'

export const RETRY_COUNT = 1

export const ENV = process.env.NODE_ENV
