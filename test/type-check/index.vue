<script lang="ts">
import { defineComponent } from 'vue'
import {
  VariousComponentProps, PublicAction, DefineMessages, DefineActions, OnMessage, I18n, StaticProps,
} from '@variousjs/various'

interface GlobalStoreProps { b: number }
type GlobalMessages = DefineMessages<{
  greet: { payload: number },
  next: { payload: string },
}>
type SelfActions = DefineActions<{
  update: { payload: number, result: void },
}>

const V = defineComponent({
  props: {
    various: Object as VariousComponentProps<GlobalStoreProps, GlobalMessages>,
  },

  setup(props) {
    // b: number
    // @ts-ignore
    const { b } = props.various?.$store || {}

    return {
      msg() {
        // 'next' / string
        props.various?.$postMessage('next', 'a')
      }
    }
  }
})

const staticProps: StaticProps<SelfActions, GlobalMessages> = {
  // payload: number / trigger: string
  // @ts-ignore
  update: (payload, trigger) => {},
  // event: 'greet' | 'next' / payload: number | string / trigger: string
  // @ts-ignore
  $onMessage: ({ event, payload, trigger }) => {},
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
    // @ts-ignore
    const { b } = props.various?.$store || {}

    return {
      msg() {
        // string / any
        props.various?.$postMessage('next', 'a')
      }
    }
  }
})

// payload: any / trigger: string
// @ts-ignore
M.update = ((payload, trigger) => {}) as PublicAction

// event: string / payload: any / trigger: string
// @ts-ignore
M.$onMessage = (({ event, payload, trigger }) => {}) as OnMessage
M.$i18n = (() => ({ lngStoreKey: 'locale', resources: {} })) as I18n
</script>
