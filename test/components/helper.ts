import { getStore, createDispatch, createPostMessage } from '@variousjs/various'
import { Store } from '../types'

const dispatch = createDispatch({ name: 'helper' })
const postMessage = createPostMessage({ name: 'helper' })

export const getName = () => getStore<Store>().name
export const setEn = async () => dispatch({
  name: 'app',
  action: 'setLocale',
  value: 'en',
})
export const sendAbc = () => postMessage('abc', undefined)
