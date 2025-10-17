import { I18n } from '@variousjs/various'
import { subscribe } from './store'
import jp from './jp.json'

export const i18nPass: I18n = () => new Promise((resolve) => {
  const unsubscribe = subscribe({
    i18nPassSignal(v) {
      if (v) {
        resolve({
          localeKey: 'globalLocale',
          resources: { jp },
        })
      }
      unsubscribe()
    },
  })
})
