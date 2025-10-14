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
            const text = await createModule<string>({ name: 'create-module', module: 'defaultText' })
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
              await createModule({ name: 'not-defined' }, false)
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
              await createModule({ name: 'empty' }, false)
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
    </>
  )
}

export const defaultText = 'default module text'
