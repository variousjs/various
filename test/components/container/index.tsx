import React, { Component, memo } from 'react'
import {
  HashRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import { getConfig, createComponent, Config } from '@variousjs/various'
import { Page } from '../../types'

type CMap = Record<string, ReturnType<typeof createComponent>>

const $config = getConfig() as Config & { pages: Page[] }
const componentsMap = $config.pages.reduce((prev, current) => {
  const currentComs = current.components.reduce((p, c) => {
    if (!prev[c.module] && !p[c.module] && !c.runtimeCreate) {
      // eslint-disable-next-line no-param-reassign
      p[c.module] = createComponent({ module: c.module, type: c.type }, c.storeKeys)
    }
    return p
  }, {} as CMap)
  return { ...prev, ...currentComs }
}, {} as CMap)

class Container extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
          <div className="slider">
            <h2> VariousJS </h2>
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
          <div className="content">
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
                              const C = com.runtimeCreate
                                ? memo(createComponent({ module: com.module, type: com.type }))
                                : componentsMap[com.module]

                              return (
                                // eslint-disable-next-line react/no-array-index-key
                                <div key={`${com.module}-${i}`} className="component">
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
