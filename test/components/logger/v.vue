<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { VueVarious } from '@variousjs/various'

const V = defineComponent({
  props: {
    various: Object as PropType<VueVarious>,
  },

  setup(props) {
    return {
      info() {
        props.various?.$logger.info('vue-info', 'vue')
      },

      warn() {
        props.various?.$logger.warn('vue warn', 'warn type')
      },

      error() {
        props.various?.$logger.error('vue something error')
      },
    }
  }
})

export default V
</script>

<template>
  <h3>Vue Component</h3>
  <div class="value">
    <p>also open console to view log</p>
    <button @click="info">info</button>
    <button @click="warn">warn</button>
    <button @click="error">error</button>
  </div>
</template>
