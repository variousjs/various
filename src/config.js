const getScriptSrc = () => {
  if (document.currentScript) {
    return document.currentScript.src
  }

  let stack

  try {
    a.b.c() // eslint-disable-line
  } catch (e) {
    stack = e.stack
    if (!stack && window.opera) {
      stack = (String(e).match(/of linked script \S+/g) || []).join(' ')
    }
  }

  if (stack) {
    stack = stack.split(/[@ ]/g).pop()
    stack = stack[0] === '(' ? stack.slice(1, -1) : stack
    return stack.replace(/(:\d+)?:\d+$/i, '')
  }

  const scripts = document.head.getElementsByTagName('script')

  for (let i = 0; i < scripts.length; i += 1) {
    if (scripts[i].readyState === 'interactive') {
      return scripts[i].src
    }
  }

  throw new Error('Cannot load script')
}

export const DEFAULT_PACKAGES = {
  react: 'https://unpkg.com/react/umd/react.production.min.js',
  'react-dom': 'https://unpkg.com/react-dom/umd/react-dom.production.min.js',
  'react-router-dom': 'https://unpkg.com/react-router-dom/umd/react-router-dom.min.js',
  nycticorax: 'https://unpkg.com/nycticorax/lib/index.js',
}

export const SCRIPT_SRC = getScriptSrc()
