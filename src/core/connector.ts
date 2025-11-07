import {
  FallbackNode,
  ErrorFallbackNode,
  App,
  ModuleDefined,
} from '@variousjs/various'
import { Fallback, ErrorFallback } from './default-component'
import {
  PublicActions,
  Store,
  ConnectorI18nConfig,
  Actions,
} from '../types'
import { getNameWithModule } from './helper'

class Connector {
  private fallbackComponent: FallbackNode<Store>

  private errorFallbackComponent: ErrorFallbackNode<Store>

  private storeActions: Actions<Store>

  private componentActions: Record<string, PublicActions>

  private i18nConfigs: Record<string, ConnectorI18nConfig | undefined>

  private globalI18nConfig: ConnectorI18nConfig | undefined

  private middlewares: App['middlewares']

  constructor() {
    this.fallbackComponent = Fallback
    this.errorFallbackComponent = ErrorFallback
    this.storeActions = {}
    this.componentActions = {}
    this.i18nConfigs = {}
    this.middlewares = {}
  }

  setMiddlewares(m: App['middlewares']) {
    this.middlewares = m
  }

  getMiddlewares() {
    return this.middlewares
  }

  setI18nConfig(moduleDefined: ModuleDefined, config: ConnectorI18nConfig) {
    const name = getNameWithModule(moduleDefined)
    this.i18nConfigs[name] = { ...this.i18nConfigs[name], ...config }
  }

  getI18nConfig(moduleDefined: ModuleDefined) {
    const name = getNameWithModule(moduleDefined)
    return this.i18nConfigs[name]
  }

  setGlobalI18nConfig(config: ConnectorI18nConfig) {
    this.globalI18nConfig = { ...this.globalI18nConfig, ...config }
  }

  getGlobalI18nConfig() {
    return this.globalI18nConfig
  }

  setComponentActions(moduleDefined: ModuleDefined, actions: PublicActions) {
    const name = getNameWithModule(moduleDefined)
    this.componentActions[name] = actions
  }

  deleteComponentActions(moduleDefined: ModuleDefined) {
    const name = getNameWithModule(moduleDefined)
    delete this.componentActions[name]
  }

  getComponentActions(moduleDefined: ModuleDefined) {
    const name = getNameWithModule(moduleDefined)
    return this.componentActions[name]
  }

  setStoreActions(actions: Actions<Store>) {
    this.storeActions = actions
  }

  getStoreActions() {
    return this.storeActions
  }

  setFallbackComponent(fallbackComponent: FallbackNode<Store>) {
    this.fallbackComponent = fallbackComponent
  }

  getFallbackComponent() {
    return this.fallbackComponent
  }

  setErrorFallbackComponent(errorFallbackComponent: ErrorFallbackNode<Store>) {
    this.errorFallbackComponent = errorFallbackComponent
  }

  getErrorFallbackComponent() {
    return this.errorFallbackComponent
  }
}

export default new Connector()
