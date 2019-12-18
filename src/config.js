const getScriptSrc = () => document.currentScript.src

export const DEFAULT_PACKAGES = {
  react: 'https://unpkg.com/react/umd/react.production.min.js',
  'react-dom': 'https://unpkg.com/react-dom/umd/react-dom.production.min.js',
  'react-router-dom': 'https://unpkg.com/react-router-dom/umd/react-router-dom.min.js',
  nycticorax: 'https://unpkg.com/nycticorax/lib/index.js',
}

export const SCRIPT_SRC = getScriptSrc()
