<script lang="ts">
import { defineComponent, ref } from 'vue'
import { VariousComponentProps, PublicAction } from '@variousjs/various'
import { Store } from '../../types'

interface NS {
  payload?: string,
  trigger?: string,
}

const message = ref<NS>({})

const V = defineComponent({
  props: {
    various: Object as VariousComponentProps<Store>,
  },

  data() {
    return { message }
  },

  setup(props) {
    return {
      dispatch() {
        props.various?.$dispatch({ target: 'dispatch', action: 'update', payload: +new Date() })
      }
    }
  }
})

V.update = ((payload, trigger) => {
  const next = {
    payload,
    trigger,
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
    <p>Value: {{ message.payload }}</p>
    <button @click="dispatch">dispatch react</button>
  </div>
</template>
