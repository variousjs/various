export default function (typeORname, funcORvalue, ...values) {
  if (name === 'global') {
    if (!storeDispatcher[funcOrValue]) {
      throw `Dispatcher \`${funcOrValue}\` not exists`
    }
    return dispatch(storeDispatcher[funcOrValue], ...values)
  }

  if (!this.props[MOUNTED_COMPONENTS].includes(name)) {
    throw `Component \`${name}\` not ready`
  }

  const actions = componentDispatcher[name]

  if (!actions[funcOrValue]) {
    throw `Dispatcher \`${funcOrValue}\` not exists`
  }

  return actions[funcOrValue](...values)
}
