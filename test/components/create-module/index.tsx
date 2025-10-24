import React, { useState } from 'react'
import { createModule, VariousError } from '@variousjs/various'

export default () => {
  const [defaultText, setDefaultText] = useState<string>()
  const [errors, setErrors] = useState<Record<string, {
    type: string,
    msg: string,
  }>>({})

  return (
    <>
      <h3>CreateModule</h3>
      <div className="value">
        <p>Default: {defaultText}</p>
        <button
          onClick={async () => {
            const text = await createModule<string>({ name: 'create-module', module: 'defaultText', url: './dist/create-module/index.js' })
            setDefaultText(text)
          }}
        >
          Create
        </button>
      </div>

      <h3>Not Defined</h3>
      <div className="value">
        <p>Error: {errors.notDefined?.type}</p>
        <p>{errors.notDefined?.msg}</p>
        <button
          onClick={async () => {
            try {
              await createModule({ name: 'not-defined' }, true)
            } catch (e) {
              const error = e as VariousError
              setErrors((pre) => ({
                ...pre,
                notDefined: { type: error.type, msg: error.message },
              }))
            }
          }}
        >
          Create
        </button>
      </div>

      <h3>Invalid Module</h3>
      <div className="value">
        <p>Error: {errors.invalidModule?.type}</p>
        <p>{errors.invalidModule?.msg}</p>
        <button
          onClick={async () => {
            try {
              // empty create by npm script
              await createModule({ name: 'empty', url: './dist/empty.js' }, false)
            } catch (e) {
              const error = e as VariousError
              setErrors((pre) => ({
                ...pre,
                invalidModule: { type: error.type, msg: error.message },
              }))
            }
          }}
        >
          Create
        </button>
      </div>

      <h3>Submodule Not Defined</h3>
      <div className="value">
        <p>Error: {errors.subModuleNotDefined?.type}</p>
        <p>{errors.subModuleNotDefined?.msg}</p>
        <button
          onClick={async () => {
            try {
              await createModule({ name: 'create-module', module: 'subModuleNotDefined' }, false)
            } catch (e) {
              const error = e as VariousError
              setErrors((pre) => ({
                ...pre,
                subModuleNotDefined: { type: error.type, msg: error.message },
              }))
            }
          }}
        >
          Create
        </button>
      </div>

      <h3>Script Error</h3>
      <div className="value">
        <p>Error: {errors.scriptError?.type}</p>
        <p>{errors.scriptError?.msg}</p>
        <button
          onClick={async () => {
            try {
              await createModule({ name: 'stack-exceeded', url: './dist/create-module/stack-exceeded.js' }, false)
            } catch (e) {
              const error = e as VariousError
              setErrors((pre) => ({
                ...pre,
                scriptError: { type: error.type, msg: error.message },
              }))
            }
          }}
        >
          Create
        </button>
      </div>

      <h3>Loading Error</h3>
      <div className="value">
        <p>Error: {errors.loadingError?.type}</p>
        <p>{errors.loadingError?.msg}</p>
        <button
          onClick={async () => {
            try {
              await createModule({ name: 'timeout', url: './dist/create-module/timeout.js' }, false)
            } catch (e) {
              const error = e as VariousError
              setErrors((pre) => ({
                ...pre,
                loadingError: { type: error.type, msg: error.message },
              }))
            }
          }}
        >
          Create
        </button>
      </div>

      <h3>Submodule Loading Error</h3>
      <div className="value">
        <p>Error: {errors.submoduleLoadingError?.type}</p>
        <p>{errors.submoduleLoadingError?.msg}</p>
        <button
          onClick={async () => {
            try {
              await createModule({ name: 'sub', url: './dist/create-module/sub-not-define.js' }, false)
            } catch (e) {
              const error = e as VariousError
              setErrors((pre) => ({
                ...pre,
                submoduleLoadingError: { type: error.type, msg: error.message },
              }))
            }
          }}
        >
          Create
        </button>
      </div>

      <h3>Submodule Script Error</h3>
      <div className="value">
        <p>Error: {errors.submoduleScriptError?.type}</p>
        <p>{errors.submoduleScriptError?.msg}</p>
        <button
          onClick={async () => {
            try {
              await createModule({ name: 'sub-error', url: './dist/create-module/sub-error.js' }, false)
            } catch (e) {
              const error = e as VariousError
              setErrors((pre) => ({
                ...pre,
                submoduleScriptError: { type: error.type, msg: error.message },
              }))
            }
          }}
        >
          Create
        </button>
      </div>
    </>
  )
}

export const defaultText = 'default module text'
