import { ComponentType } from 'react'
import { LoaderProps, ErrorProps } from '@variousjs/various'
import { Loader, Error } from './built-in'
import { Actions, ComponentDispatcher } from '../types'

class Connector {
  private loaderComponent: ComponentType<LoaderProps>

  private errorComponent: ComponentType<ErrorProps>

  private storeActions: Actions

  private componentActions: Record<string, ComponentDispatcher>

  private components: Record<string, ComponentType>

  constructor() {
    this.loaderComponent = Loader
    this.errorComponent = Error
    this.storeActions = {}
    this.componentActions = {}
    this.components = {}
  }

  setComponent(name: string, component: ComponentType) {
    this.components[name] = component
  }

  getComponent(name: string) {
    return this.components[name]
  }

  setComponentActions(name:string, actions: ComponentDispatcher) {
    this.componentActions[name] = actions
  }

  deleteComponentActions(name: string) {
    delete this.componentActions[name]
  }

  getComponentActions(name: string) {
    return this.componentActions[name]
  }

  setStoreActions(actions: Actions) {
    this.storeActions = actions
  }

  getStoreActions() {
    return this.storeActions
  }

  setLoaderComponent(loaderComponent: ComponentType<LoaderProps>) {
    this.loaderComponent = loaderComponent
  }

  getLoaderComponent() {
    return this.loaderComponent
  }

  setErrorComponent(errorComponent: ComponentType<ErrorProps>) {
    this.errorComponent = errorComponent
  }

  getErrorComponent() {
    return this.errorComponent
  }
}

export default new Connector()
