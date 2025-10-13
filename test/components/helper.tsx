import React, { useEffect, useMemo, useState } from 'react'
import {
  version,
  isModuleLoaded,
  getMountedComponents,
  preloadModules,
  onComponentMounted,
  createComponent,
} from '@variousjs/various'

const testPreloadModule = 'post-message'
const testOnMountedModule = { name: 'helper', module: 'Waiting' }

export default () => {
  const [isLoaded, setIsLoaded] = useState(() => String(isModuleLoaded(testPreloadModule)))
  const [isMounted, setIsMounted] = useState(false)
  const [isHelperMounted, setIsHelperMounted] = useState(false)
  const [canMount, setCanMount] = useState(false)

  const MountNode = useMemo(() => createComponent(testOnMountedModule), [])

  const mountedComponents = getMountedComponents()
    .map((m) => {
      const { name, module } = m
      return [name, module].filter(Boolean).join('.')
    })
    .join()

  const preload = async () => {
    await preloadModules(testPreloadModule)
    setIsLoaded(String(isModuleLoaded(testPreloadModule)))
  }

  useEffect(() => {
    const un0 = onComponentMounted({ ...testOnMountedModule, module: undefined }, () => {
      setIsHelperMounted(true)
    })
    const un1 = onComponentMounted({ ...testOnMountedModule }, () => {
      setIsMounted(true)
    })
    return () => {
      un0()
      un1()
    }
  }, [])

  return (
    <>
      <h3>version</h3>
      <div className="value">{version}</div>

      <h3>isModuleLoaded</h3>
      <div className="value">{testPreloadModule}: {isLoaded}</div>

      <h3>getMountedComponents</h3>
      <div className="value">{mountedComponents}</div>

      <h3>preloadModules</h3>
      <div className="value">
        <button onClick={() => preload()}>Preload: {testPreloadModule}</button>
      </div>

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
