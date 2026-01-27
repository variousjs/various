<script lang="ts">
import { defineComponent, ref } from 'vue'
import { VariousComponentProps, OnMessage } from '@variousjs/various'

interface NS {
  event?: string,
  payload?: any,
  trigger?: string,
}

const message = ref<NS>({})

const V = defineComponent({
  props: {
    various: Object as VariousComponentProps,
  },

  data() {
    return { message }
  },

  setup(props) {
    return {
      post() {
        props.various?.$postMessage('Vue-greet', +new Date())
      }
    }
  }
})

V.$onMessage = (({ event, payload, trigger }) => {
  const next = {
    event,
    payload,
    trigger,
  }
  message.value = next
}) as OnMessage

export default V
</script>

<template>
  <h3>Vue Component</h3>
  <div class="value">
    <p>Trigger: {{ message.trigger }}</p>
    <p>Event: {{ message.event }}</p>
    <p>Payload: {{ message.payload }}</p>
    <button @click="post">Vue Post</button>
  </div>
</template>
