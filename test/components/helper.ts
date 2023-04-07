import { getStore, createDispatch, createPostMessage } from '@variousjs/various'

const dispatch = createDispatch('helper')
const postMessage = createPostMessage('helper')

export const getName = () => getStore().name
export const setEn = async () => dispatch('store', 'setLocale', 'en')
export const sendAbc = () => postMessage('abc')
