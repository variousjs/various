import React from 'react'
import {
  createDispatch,
  Nycticorax,
  onComponentMounted,
} from '@variousjs/various'
import type { VariousFC } from '@variousjs/various'

interface NS {
  name?: string,
  token?: string,
}

const { createStore, emit, connect } = new Nycticorax<NS>()
createStore({})

const dispatch = createDispatch('auth-consumer')

const C = ((props) => {
  const {
    name,
    token,
    $dispatch,
  } = props

  return (
    <>
      <h3>User from auth-service [example]</h3>
      <div className="value">
        <p id="auth-name">{name}</p>
        <p id="auth-token">{token || '-'}</p>
        <button
          onClick={() => $dispatch({
            target: 'auth-service',
            action: 'setUser',
            payload: {
              name: 'various',
              token: 'token-various',
            },
          })}
        >
          login
        </button>
        <button onClick={() => $dispatch({ target: 'auth-service', action: 'logout' })}>
          logout
        </button>
      </div>
    </>
  )
}) as VariousFC<NS>

// push channel: re-render on service broadcasts
C.$onMessage = ({ event, payload }) => {
  if (event === 'user-changed') {
    emit({
      name: payload.name,
      token: payload.token,
    })
  }
}

// pull-then-push handshake: wait for the service module to mount, then pull
// the initial snapshot. actions are registered right after the mounted flag
// is set, so retry briefly on the "component is not ready" race
function pull(attempt = 0) {
  dispatch({ target: 'auth-service', action: 'getUser' })
    .then((user: NS) => emit({
      name: user.name,
      token: user.token,
    }))
    .catch(() => {
      if (attempt < 5) {
        setTimeout(() => pull(attempt + 1), 50)
      }
    })
}

onComponentMounted('auth-service', () => pull())

export default connect('name', 'token')(C)
