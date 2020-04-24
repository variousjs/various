# humpback

RequireJS(AMD) + React

DEMO: https://fratercula.github.io/humpback/

## Usage

index.html

```html
<!-- requirejs -->
<script src="https://unpkg.com/requirejs@2.3.6/require.js"></script>
<!-- humpback -->
<script src="https://unpkg.com/@fratercula/humpback@0.2.0/lib/index.js"></script>

<script>
var config = {
  dependencies: { // required
    antd: 'cdn/path/to/antd/umd', // optional, dependency packages
  },
  components: { // required
    global: 'cdn/path/to/container/component', // required
    'a': 'cdn/path/componet/a',
    'b': 'cdn/path/componet/b',
  },
  routes: [
    {
      path: '/',
      components: [
        'a', 'b',
      ],
    },
    {
      path: '/next/:id',
      components: [
        'switch', // component not defined in `packages`, can be mounted later
        'b',
      ],
    },
  ],
  ...other, // other config
}
var humpback = new window.Humpback(config)
humpback.start()
</script>
```

global component

```js
import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Layout, Spin, Alert, Button } from 'antd'

// store
const store = {
  user: {
    name: 'humpback',
  },
  number: '10',
}

// dispatcher
const dispatcher = {
  async updateUserName({ dispatch, getStore }, value) {
    await new Promise((r) => setTimeout(r, 1000))
    const { user } = getStore()
    user.name = value
    dispatch({ user })
  },
  getUserName({ getStore }) {
    const { user } = getStore()
    return user.name
  },
}

// loading
const loading = () => (<Spin />)

// error
const error = ({ error, reload }) => (
  <>
    <Alert
      message="Error"
      description={error}
      type="error"
    />
    {reload && <Button onClick={reload}>刷新</Button>}
  </>
)

// container
import { Route } from 'react-router-dom'

const container = (props) => {
  const {
    config,
    Routes,
    componentCreator,
  } = props

  return (
    <Layout>
      <Routes>
      {
        config.routes.map(({ path, components }) => {
          const route = components.map((name) => {
            const C = componentCreator(name)
            return (<div><C /></div>)
          })
          return (
            <Route
              key={path}
              exact
              path={path}
              component={route}
            />
          )
        })
      }
      </Routes>
    </Layout>
  )
}

export default {
  store,
  dispatcher,
  container,
  loading,
  error,
}
```

component

```js
import React, { Component } from 'react'
import { Button, message } from 'antd'
import Nycticorax from 'nycticorax'

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Nycticorax()

createStore({ b: 'data' })

class X extends Component {
  static getValue = () => getStore().b // dispatcher

  static updateValue = (value) => {
    dispatch({ b: value })
  }

  onSetG = () => {
    this.props.dispatch('global', 'setNumber', Math.random().toFixed(2))
  }

  onGetA = () => {
    try {
      message.info(this.props.dispatch('a', 'getValue'))
    } catch (e) {
      message.error(e)
    }
  }

  onSetA = async () => {
    await this.props.dispatch('a', 'updateValue', Math.random().toFixed(2))
  }

  render() {
    const { number } = this.props.store
    const { b, match } = this.props

    return (
      <div>
        <p style={{ fontSize: 100 }}>B</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>global value：{number}</p>
          <p>component value: {b}</p>
          <p>router：{match.params.id || 'empty'}</p>
          <Button onClick={this.onGetA}>get A value</Button>
          <Button onClick={this.onSetA}>set A value</Button>
          <Button onClick={this.onSetG}>update global</Button>
        </div>
      </div>
    )
  }
}

export default connect('b')(X)

```

## API

```js
var config = {
  packages: {
    // ...
    moment: 'https://cdn.jsdelivr.net/npm/moment/min/moment.min.js',
    moment_zhCN: 'cdn/to/zh-cn.js',
  },
}

var humpback = new window.Humpback(config) // initial

// require
humpback.require(['moment', 'moment_zhCN'], function (moment) {
  moment.locale('zh-cn') // set moment zh-CN
})

// start
humpback.start()
```

## Props

humpback core use https://github.com/fratercula/nycticorax

### dispatch

dispatch(type, name, value)

**type**

- `global`
- component name

example:

```js
dispatch('global', 'setCount', 3)
const value = dispatch('component-a', 'getValue')
```

### global component

```js
// container
const container = (props) => {
  const {
    dispatch, // dispatch function
    Routes, // components container
    componentCreator, // create component by name
    store, // global data
    mountedComponents, // mounted components
    config, // humpback config
  } = props
  // return ...
}

// dispatcher
const dispatcher = {
  async updateUserName({ dispatch, getStore }, value) {
    await new Promise((r) => setTimeout(r, 1000))
    const { user } = getStore() // store data
    user.name = value
    dispatch({ user }) // update user
  },
}

// component error
const error = (props) => {
  const {
    error,  // error message
    reload, // trigger component reload
  } = props
  //return ...
}
```

### component

```js
import React, { Component } from 'react'
import Nycticorax from 'nycticorax'

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Nycticorax() // you can use Redux

createStore({ count: 2, number: '233' })

class X extends Component {
  // for others/global component access
  static getValue = () => getStore().count
  static updateValue = async (number) => {
    // await ...
    dispatch({ number }, true)
  }

  componentDidMount() {
    const {
      config, // humpback config
      mountedComponents, // mounted components
      store, // global data
      dispatch, // dispatch function

      // react-router
      match,
      history,
      location,

      // local data
      count,
      number,
    } = this.props
  }

  // render() {
  // }
}

export default connect('count', 'number')(X)
```

## Development

Install

```bash
$ npm i falco -g
$ npm i pavane -g # or other liveReload server
```

Dev

```bash
$ npm run a # build component a
$ npm run b # build component b
$ npm run c # build component c
$ npm run d # build component d
$ npm run global # build container component

$ npm run index # build humpack loader
$ npm run humpack # build humpback core
```

Preview

```bash
$ cd docs
$ pv # liveReload web server pavane
```

Build

```bash
$ npm run build # build lib
```
