import React, { Component, memo } from 'react'
import {
  HashRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import { getConfig, createComponent, Config } from '@variousjs/various'
import { Page } from '../types'

type CMap = Record<string, ReturnType<typeof createComponent>>

const $config = getConfig() as Config & { pages: Page[] }
const componentsMap = $config.pages.reduce((prev, current) => {
  const currentComs = current.components.reduce((p, c) => {
    const [name, module] = c.name.split('.')
    if (!prev[c.name] && !p[c.name] && !c.runtimeCreate) {
      // eslint-disable-next-line no-param-reassign
      p[c.name] = createComponent({ name, module }, c.storeKeys)
    }
    return p
  }, {} as CMap)
  return { ...prev, ...currentComs }
}, {} as CMap)

class Container extends Component {
  render() {
    return (
      <HashRouter>
        <div style={{ height: '100vh' }}>
          <div>
            <h3> VariousJS </h3>
            <div>
              {
                $config.pages.map((item) => {
                  const { label, path } = item

                  return (
                    <div key={path}>
                      <Link to={path}>{label}</Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div>
            <Switch>
              {
                $config.pages.map((page) => {
                  const { path, components } = page

                  return (
                    <Route
                      key={path}
                      exact
                      path={path}
                      component={() => (
                        <>
                          {
                            components.map((com, i) => {
                              const [name, module] = com.name.split('.')
                              const C = com.runtimeCreate
                                ? memo(createComponent({ name, module }))
                                : componentsMap[name]

                              return (
                                // eslint-disable-next-line react/no-array-index-key
                                <div key={`${com.name}-${i}`} className="component">
                                  <C />
                                </div>
                              )
                            })
                          }
                        </>
                      )}
                    />
                  )
                })
              }
            </Switch>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Container
