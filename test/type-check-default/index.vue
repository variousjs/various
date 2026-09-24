<script lang="ts">
import { defineComponent } from 'vue'
import {
  VariousComponentProps, PublicAction, OnMessage, I18n,
} from '@variousjs/various'

// Default types: no VariousContract augmentation in this program, so the
// builtin vue prop and statics fall back to the loose types.
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
