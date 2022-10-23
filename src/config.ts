export const DEFAULT_PACKAGES = {
  react: 'https://unpkg.com/react@18/umd/react.production.min.js',
  'react-dom': 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
}

export const MOUNTED_COMPONENTS = Symbol('MOUNTED_COMPONENTS')

export const MESSAGE_KEY = Symbol('MESSAGE_KEY')

export const ENV = Symbol('ENV')

export enum ERROR_TYPE {
  LOADING_ERROR = 'LOADING_ERROR',
  DEPENDENCIES_LOADING_ERROR = 'DEPENDENCIES_LOADING_ERROR',
  NOT_DEFINED = 'NOT_DEFINED',
  INVALID_COMPONENT = 'INVALID_COMPONENT',
  SCRIPT_ERROR = 'SCRIPT_ERROR',
  CONTAINER_ERROR = 'CONTAINER_ERROR',
}

export const ROOT_CONTAINER = '#root'
