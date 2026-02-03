<script lang="ts">
import { defineComponent } from 'vue'
import {
  VariousComponentProps, PublicAction, DefineMessages, DefineActions, OnMessage, I18n, ComponentStatics,
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
    // b: number
    const { b } = props.various?.$store || {}
    window.console.log(b)

    return {
      msg() {
        // 'next' / string
        props.various?.$postMessage({ event: 'next', payload: 'a' })
      },
      async dispatch() {
        // 'ca' / 'next' / string
        const res = await props.various?.$dispatch({ target: 'ca', action: 'next', payload: 'a' })
        // res: number
        window.console.log(res)
      }
    }
  }
})

const staticProps: ComponentStatics<SelfActions, GlobalMessages> = {
  // payload: number / trigger: string
  update: ({ payload, trigger }) => {
    window.console.log(payload, trigger)
  },
  // event: 'greet' | 'next' / payload: number | string / trigger: string
  $onMessage: ({ event, payload, trigger }) => {
    window.console.log(event, payload, trigger)
  },
  $i18n: () => ({ lngStoreKey: 'locale', resources: {} }),
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
    // b: any
    const { b } = props.various?.$store || {}

    return {
      msg() {
        // string / any
        props.various?.$postMessage({ event: 'next', payload: b })
      },
      async dispatch() {
        // string / string / any
        const res = await props.various?.$dispatch({ target: 'ca', action: 'next', payload: 'a' })
        // res: any
        window.console.log(res)
      }
    }
  }
})

// payload: any / trigger: string
M.update = (({ payload, trigger }) => {
  window.console.log(payload, trigger)
}) as PublicAction

// event: string / payload: any / trigger: string
M.$onMessage = (({ event, payload, trigger }) => {
  window.console.log(event, payload, trigger)
}) as OnMessage
M.$i18n = (() => ({ lngStoreKey: 'locale', resources: {} })) as I18n
</script>
