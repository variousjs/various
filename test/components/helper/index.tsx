import React, { useEffect, useMemo, useState } from 'react'
import {
  version,
  isModuleLoaded,
  getMountedComponents,
  preloadModules,
  onComponentMounted,
  createComponent,
  defineDependencies,
  getConfig,
  getStore,
  removeLoadedModules,
} from '@variousjs/various'

const testPreloadModule = 'helper-define'
const testOnMountedModule = { name: 'helper', module: 'Waiting' }

export default () => {
  const [isLoaded, setIsLoaded] = useState('false')
  const [isPreloadLoaded, setIsPreloadLoaded] = useState('false')
  const [isMounted, setIsMounted] = useState(false)
  const [isHelperMounted, setIsHelperMounted] = useState(false)
  const [canMount, setCanMount] = useState(false)

  const MountNode = useMemo(() => createComponent(testOnMountedModule), [])

  const mountedComponents = getMountedComponents()
    .map((m) => {
      const { name, module } = m
      return [name, module].filter(Boolean).join('.')
    })
    .sort()
    .join()

  const preload = async () => {
    try {
      await preloadModules([testPreloadModule])
      setIsLoaded(String(isModuleLoaded(testPreloadModule)))
    } catch {
      setIsLoaded('load error')
    }
  }

  const remove = () => {
    removeLoadedModules([testPreloadModule, 'react']) // react won\'t been remove
    setIsLoaded(String(isModuleLoaded(testPreloadModule)))
  }

  useEffect(() => {
    setIsPreloadLoaded(String(isModuleLoaded('preload')))
    const un2 = onComponentMounted([{ ...testOnMountedModule }, { name: 'no-exist' }], () => {
      // will not trigger
    })
    const un0 = onComponentMounted({ ...testOnMountedModule, module: undefined }, () => {
      setIsHelperMounted(true)
    })
    const un1 = onComponentMounted([{ ...testOnMountedModule }], () => {
      setIsMounted(true)
      un2?.()
    })
    return () => {
      un0?.()
      un1?.()
    }
  }, [])

  return (
    <>
      <h3>version</h3>
      <div className="value">{version}</div>

      <h3>getConfig</h3>
      <div className="value">timeout: {getConfig().timeout}</div>

      <h3>getStore</h3>
      <div className="value">name: {getStore().name}</div>

      <h3>isModuleLoaded</h3>
      <div className="value">
        <p>{testPreloadModule}: {isLoaded}</p>
        <p>preload component: {isPreloadLoaded}</p>
      </div>

      <h3>defineDependencies</h3>
      <div className="value">
        <button
          onClick={() => defineDependencies({
            [testPreloadModule]: './dist/helper/define.js',
            react: 'this won\'t take effect',
          })}
        >
          Define: {testPreloadModule}
        </button>
      </div>

      <h3>preloadModules</h3>
      <div className="value">
        <button onClick={() => preload()}>Preload: {testPreloadModule}</button>
      </div>

      <h3>removeLoadedModules</h3>
      <div className="value">
        <button onClick={() => remove()}>remove: {testPreloadModule}</button>
      </div>

      <h3>getMountedComponents</h3>
      <div className="value">{mountedComponents}</div>

      <h3>onComponentMounted</h3>
      <div className="value">
        <p>helper: {String(isHelperMounted)}</p>
        <p>Waiting: {String(isMounted)}</p>
        <button onClick={() => setCanMount(true)}>Mount: {testOnMountedModule.module}</button>
        { canMount && <MountNode /> }
      </div>
    </>
  )
}

export const Waiting = () => null
