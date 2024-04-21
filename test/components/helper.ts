import { getStore, createDispatch, createPostMessage } from '@variousjs/various'
import { Store } from '../types'

const dispatch = createDispatch('helper')
const postMessage = createPostMessage('helper')

export const getName = () => getStore<Store>().name
export const setEn = async () => dispatch('app', 'setLocale', 'en')
export const sendAbc = () => postMessage('abc')
