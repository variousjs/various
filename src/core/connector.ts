import { ComponentType } from 'react'
import { Root } from 'react-dom/client'
import {
  LoaderNode,
  ErrorNode,
  I18n,
  Actions,
} from '@variousjs/various'
import { Loader, Error } from './default-component'
import { ComponentActions, Store } from '../types'

class Connector {
  private loaderComponent: LoaderNode<Store>

  private errorComponent: ErrorNode<Store>

  private storeActions: Actions<Store>

  private componentActions: Record<string, ComponentActions>

  private components: Record<string, ComponentType>

  private renderRoots: Record<string, Root>

  private i18nConfigs: Record<string, ReturnType<I18n>>

  constructor() {
    this.loaderComponent = Loader
    this.errorComponent = Error
    this.storeActions = {}
    this.componentActions = {}
    this.components = {}
    this.renderRoots = {}
    this.i18nConfigs = {}
  }

  setI18nConfig(name: string, config: ReturnType<I18n>) {
    this.i18nConfigs[name] = config
  }

  getI18nConfig(name: string) {
    return this.i18nConfigs[name]
  }

  setRenderRoot(name: string, root: Root) {
    this.renderRoots[name] = root
  }

  getRenderRoot(name: string) {
    return this.renderRoots[name]
  }

  deleteRenderRoot(name: string) {
    delete this.renderRoots[name]
  }

  setComponent(name: string, component: ComponentType) {
    this.components[name] = component
  }

  getComponent(name: string) {
    return this.components[name]
  }

  setComponentActions(name:string, actions: ComponentActions) {
    this.componentActions[name] = actions
  }

  deleteComponentActions(name: string) {
    delete this.componentActions[name]
  }

  getComponentActions(name: string) {
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
