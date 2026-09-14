<script lang="ts">
import { defineComponent } from 'vue'
import {
  VariousComponentProps, PublicAction, DefineMessages, DefineActions, OnMessage, I18n, ComponentStatics,
  DefineAppActions,
} from '@variousjs/various'

interface GlobalStoreProps { b: number }
type GlobalMessages = DefineMessages<{
  greet: { payload: number },
  next: { payload: string },
}>
type SelfActions = DefineActions<{
  update: { payload: number, result: void },
}>
type GlobalActions = {
  app: DefineAppActions<{
    set: { payload: string, result: void },
  }>,
  ca: DefineActions<{
    next: { payload: string, result: number },
  }>,
  cb: DefineActions<{
    update: { payload: string, result: string },
  }>,
}

const V = defineComponent({
  props: {
    various: Object as VariousComponentProps<GlobalStoreProps, GlobalMessages, GlobalActions>,
  },

  setup(props) {
    const { b } = props.various?.$store || {}
    type _b = Expect<Equal<typeof b, number | undefined>>
    window.console.log(b)

    return {
      msg() {
        props.various?.$postMessage({ event: 'next', payload: 'a' })
      },
      async dispatch() {
        const res = await props.various?.$dispatch({ target: 'ca', action: 'next', payload: 'a' })
        type _r = Expect<Equal<typeof res, number | undefined>>
        window.console.log(res)

        props.various?.$dispatch({ target: 'app', action: 'updateI18nConfig', payload: { resources: { zh: { name: 'C' } } } })
      }
    }
  }
})

const staticProps: ComponentStatics<SelfActions, GlobalMessages> = {
  update: ({ payload, trigger }) => {
    type _p = Expect<Equal<typeof payload, number | undefined>>
    type _t = Expect<Equal<typeof trigger, string>>
    window.console.log(payload, trigger)
  },
  $onMessage: ({ event, payload, trigger }) => {
    type _e = Expect<Equal<typeof event, 'greet' | 'next'>>
    type _p = Expect<Equal<typeof payload, number | string>>
    type _t = Expect<Equal<typeof trigger, string>>
    window.console.log(event, payload, trigger)
  },
  $i18n: () => ({ resources: {} }),
}

export default Object.assign(V, staticProps)

/*
  --------------------------------------
  default types
  --------------------------------------
*/

export const M = defineComponent({
  props: {
    various: Object as VariousComponentProps,
  },

  setup(props) {
    const { b } = props.various?.$store || {}
    type _b = Expect<Equal<typeof b, any>>

    return {
      msg() {
        props.various?.$postMessage({ event: 'next', payload: b })
      },
      async dispatch() {
        const res = await props.various?.$dispatch({ target: 'ca', action: 'next', payload: 'a' })
        type _r = Expect<Equal<typeof res, any>>
        window.console.log(res)
      }
    }
  }
})

M.update = (({ payload, trigger }) => {
  type _p = Expect<Equal<typeof payload, any>>
  type _t = Expect<Equal<typeof trigger, string>>
  window.console.log(payload, trigger)
}) as PublicAction

M.$onMessage = (({ event, payload, trigger }) => {
  type _e = Expect<Equal<typeof event, string>>
  type _p = Expect<Equal<typeof payload, any>>
  type _t = Expect<Equal<typeof trigger, string>>
  window.console.log(event, payload, trigger)
}) as OnMessage
M.$i18n = (() => ({ resources: {} })) as I18n
</script>
