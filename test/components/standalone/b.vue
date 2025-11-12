<script lang="ts">
import { defineComponent, ref } from 'vue'
import { VueVarious, OnMessage } from '@variousjs/various'

interface NS {
  event?: string,
  trigger?: string,
}

const message = ref<NS>({})

const V = defineComponent({
  props: {
    various: Object as VueVarious,
    propsB: String,
  },

  data() {
    const { $self } = this.$props.various || {}
    return { message, ...$self }
  },

  setup(props) {
    return {
      dispatch() {
        props.various?.$dispatch({ name: 'a', module: 'A', action: 'log', value: 'log' })
      }
    }
  }
})

V.$onMessage = (({ event, trigger }) => {
  const next = {
    event,
    trigger: [trigger.name, trigger.module].filter(Boolean).join('.'),
  }
  message.value = next
}) as OnMessage

export default V
</script>

<template>
  <h3>Vue Component</h3>
  <div class="value">
    <p>props: {{ propsB }}</p>
    <p>info: {{ name }} - {{ url }}</p>
    <p>Trigger: {{ message.trigger }}</p>
    <p>Event: {{ message.event }}</p>
    <button @click="dispatch">dispatch</button>
  </div>
</template>
