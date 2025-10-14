<script lang="ts">
import { defineComponent } from 'vue'
import { renderComponent } from '@variousjs/various'

const V = defineComponent({
  setup() {
    return {
      render() {
        renderComponent({
          name: 'render',
          module: 'ForVue',
          target: document.querySelector('#vue-dom')
        })
      }
    }
  },
})

export default V
</script>

<template>
  <h3>Vue Component</h3>
  <div class="value">
    <div id="vue-dom"></div>
    <button @click="render">render</button>
  </div>
</template>
