<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { VueVarious, PublicAction } from '@variousjs/various'
import { Store } from '../../types'

interface NS {
  value?: string,
  trigger?: string,
}

const message = ref<NS>({})

const V = defineComponent({
  props: {
    various: Object as PropType<VueVarious<Store>>,
  },

  data() {
    return { message }
  },

  setup(props) {
    return {
      dispatch() {
        props.various?.$dispatch({ name: 'dispatch', action: 'update', value: +new Date() })
      }
    }
  }
})

V.update = ((value, trigger) => {
  const next = {
    value,
    trigger: [trigger.name, trigger.module].filter(Boolean).join('.'),
  }
  message.value = next
}) as PublicAction

export default V
</script>

<template>
  <h3>Vue Component</h3>
  <div class="value">
    <p>store: {{ various?.$store.name }}</p>
    <p>Trigger: {{ message.trigger }}</p>
    <p>Value: {{ message.value }}</p>
    <button @click="dispatch">dispatch</button>
  </div>
</template>
