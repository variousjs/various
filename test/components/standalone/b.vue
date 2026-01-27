<script lang="ts">
import { defineComponent, ref } from 'vue'
import { VariousComponentProps, OnMessage } from '@variousjs/various'

interface NS {
  event?: string,
  trigger?: string,
}

const message = ref<NS>({})

const V = defineComponent({
  props: {
    various: Object as VariousComponentProps<{ globalB: string }>,
    propsB: String,
  },

  data() {
    const { $self } = this.$props.various || {}
    return { message, ...$self }
  },

  setup(props) {
    return {
      dispatch() {
        props.various?.$dispatch({ target: 'a.A', action: 'log', payload: 'log' })
      }
    }
  }
})

V.$onMessage = (({ event, trigger }) => {
  const next = {
    event,
    trigger,
  }
  message.value = next
}) as OnMessage

export default V
</script>

<template>
  <h3>Vue Component</h3>
  <div class="value">
    <p>global: {{ various?.$store.globalB }}</p>
    <p>props: {{ propsB }}</p>
    <p>info: {{ module }} - {{ url }}</p>
    <p>Trigger: {{ message.trigger }}</p>
    <p>Event: {{ message.event }}</p>
    <button @click="dispatch">dispatch</button>
  </div>
</template>
