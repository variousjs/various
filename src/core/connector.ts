import {
  FallbackNode,
  ErrorFallbackNode,
  App,
  ModuleDef,
} from '@variousjs/various'
import { Fallback, ErrorFallback } from './default-component'
import {
  PublicActions,
  ConnectorI18nConfig,
  Actions,
} from '../types'

class Connector {
  private fallbackComponent: FallbackNode<any>

  private errorFallbackComponent: ErrorFallbackNode<any>

  private storeActions: Actions<any>

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

  setI18nConfig(module: ModuleDef, config: ConnectorI18nConfig) {
    this.i18nConfigs[module] = { ...this.i18nConfigs[module], ...config }
  }

  getI18nConfig(module: ModuleDef) {
    return this.i18nConfigs[module]
  }

  setGlobalI18nConfig(config: ConnectorI18nConfig) {
    this.globalI18nConfig = { ...this.globalI18nConfig, ...config }
  }

  getGlobalI18nConfig() {
    return this.globalI18nConfig
  }

  setComponentActions(module: ModuleDef, actions: PublicActions) {
    this.componentActions[module] = actions
  }

  deleteComponentActions(module: ModuleDef) {
    delete this.componentActions[module]
  }

  getComponentActions(module: ModuleDef) {
    return this.componentActions[module]
  }

  setStoreActions(actions: Actions<any>) {
    this.storeActions = actions
  }

  getStoreActions() {
    return this.storeActions
  }

  setFallbackComponent(fallbackComponent: FallbackNode<any>) {
    this.fallbackComponent = fallbackComponent
  }

  getFallbackComponent() {
    return this.fallbackComponent
  }

  setErrorFallbackComponent(errorFallbackComponent: ErrorFallbackNode<any>) {
    this.errorFallbackComponent = errorFallbackComponent
  }

  getErrorFallbackComponent() {
    return this.errorFallbackComponent
  }
}

export default new Connector()
