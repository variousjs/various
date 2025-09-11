import { ComponentType } from 'react'
import { Root } from 'react-dom/client'
import {
  LoaderNode,
  ErrorNode,
  I18nConfig,
  App,
  ModuleDefined,
} from '@variousjs/various'
import { Loader, Error } from './default-component'
import { PublicActions, Store, Actions } from '../types'
import { getNameWithModule } from './helper'

class Connector {
  private loaderComponent: LoaderNode<Store>

  private errorComponent: ErrorNode<Store>

  private storeActions: Actions<Store>

  private componentActions: Record<string, PublicActions>

  private components: Record<string, ComponentType<any>>

  private renderRoots: Record<string, Root>

  private i18nConfigs: Record<string, I18nConfig>

  private middlewares: App['middlewares']

  constructor() {
    this.loaderComponent = Loader
    this.errorComponent = Error
    this.storeActions = {}
    this.componentActions = {}
    this.components = {}
    this.renderRoots = {}
    this.i18nConfigs = {}
    this.middlewares = {}
  }

  setMiddlewares(m: App['middlewares']) {
    this.middlewares = m
  }

  getMiddlewares() {
    return this.middlewares
  }

  setI18nConfig(moduleDefined: ModuleDefined, config: I18nConfig) {
    const name = getNameWithModule(moduleDefined)
    this.i18nConfigs[name] = config
  }

  getI18nConfig(moduleDefined: ModuleDefined) {
    const name = getNameWithModule(moduleDefined)
    return this.i18nConfigs[name]
  }

  setRenderRoot(moduleDefined: ModuleDefined, root: Root) {
    const name = getNameWithModule(moduleDefined)
    this.renderRoots[name] = root
  }

  getRenderRoot(moduleDefined: ModuleDefined) {
    const name = getNameWithModule(moduleDefined)
    return this.renderRoots[name]
  }

  deleteRenderRoot(moduleDefined: ModuleDefined) {
    const name = getNameWithModule(moduleDefined)
    delete this.renderRoots[name]
  }

  setComponent(moduleDefined: ModuleDefined, component: ComponentType) {
    const name = getNameWithModule(moduleDefined)
    this.components[name] = component
  }

  getComponent(moduleDefined: ModuleDefined) {
    const name = getNameWithModule(moduleDefined)
    return this.components[name]
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
