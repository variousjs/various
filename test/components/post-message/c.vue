<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { VueVarious, OnMessage } from '@variousjs/various'

interface NS {
  event?: string,
  value?: any,
  trigger?: string,
}

const message = ref<NS>({})

const V = defineComponent({
  props: {
    various: Object as PropType<VueVarious>,
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

V.$onMessage = (({ event, value, trigger }) => {
  const next = {
    event,
    value,
    trigger: [trigger.name, trigger.module].filter(Boolean).join('.'),
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
    <p>Value: {{ message.value }}</p>
    <button @click="post">Vue Post</button>
  </div>
</template>
