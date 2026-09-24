<script lang="ts">
import { defineComponent } from 'vue'
import {
  VariousComponentProps, ComponentStatics,
} from '@variousjs/various'

// No negative probes in this file: $postMessage/$dispatch are the same
// $postMessage<M>/$dispatch<M> constructors already probed in index.tsx.
// All contract info comes from ./various.d.ts via ambient defaults, so the
// vue prop and the statics only carry component-specific arguments.
const V = defineComponent({
  props: {
    various: Object as VariousComponentProps,
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

const staticProps: ComponentStatics<'ca'> = {
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
</script>
