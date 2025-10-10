import {
  LoaderNode,
  ErrorNode,
  App,
  ModuleDefined,
} from '@variousjs/various'
import { Loader, Error } from './default-component'
import {
  PublicActions,
  Store,
  ConnectorI18nConfig,
  Actions,
} from '../types'
import { getNameWithModule } from './helper'

class Connector {
  private loaderComponent: LoaderNode<Store>

  private errorComponent: ErrorNode<Store>

  private storeActions: Actions<Store>

  private componentActions: Record<string, PublicActions>

  private i18nConfigs: Record<string, ConnectorI18nConfig | undefined>

  private globalI18nConfig: ConnectorI18nConfig | undefined

  private middlewares: App['middlewares']

  constructor() {
    this.loaderComponent = Loader
    this.errorComponent = Error
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

  setLoaderComponent(loaderComponent: LoaderNode<Store>) {
    this.loaderComponent = loaderComponent
  }

  getLoaderComponent() {
    return this.loaderComponent
  }

  setErrorComponent(errorComponent: ErrorNode<Store>) {
    this.errorComponent = errorComponent
  }

  getErrorComponent() {
    return this.errorComponent
  }
}

export default new Connector()
