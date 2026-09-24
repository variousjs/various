import {
  createPostMessage,
} from '@variousjs/various'
import type { VariousFC } from '@variousjs/various'

// headless service module: renders nothing, owns its domain state and
// exposes it through component actions (pull) and postMessage broadcasts
// (push). it must stay mounted — unmounting unregisters its actions.
export type User = {
  name: string,
  token: string,
}

let user: User = {
  name: 'guest',
  token: '',
}

const post = createPostMessage('auth-service')

function notify() {
  post({ event: 'user-changed', payload: { ...user } })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Service = ((_) => null) as VariousFC

// pull channel: dispatchable as $dispatch({ target: 'auth-service', ... })
Service.getUser = (): User => ({ ...user })

Service.setUser = ({ payload }: { payload: User }): User => {
  user = { ...payload }
  notify()
  return { ...user }
}

Service.logout = (): User => {
  user = {
    name: 'guest',
    token: '',
  }
  notify()
  return { ...user }
}

export default Service
