const getScriptSrc = () => document.currentScript.src

export const DEFAULT_PACKAGES = {
  react: 'https://unpkg.com/react@16.12.0/umd/react.production.min.js',
  'react-dom': 'https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js',
  'react-router-dom': 'https://unpkg.com/react-router-dom@5.1.2/umd/react-router-dom.min.js',
  'nycticorax': 'https://unpkg.com/nycticorax@1.1.0/lib/index.js',
}

export const SCRIPT_SRC = getScriptSrc()
