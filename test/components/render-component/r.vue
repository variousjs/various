<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import { renderComponent } from '@variousjs/various'

const V = defineComponent({
  setup() {
    let un = () => Promise.resolve()

    onUnmounted(() => {
      un()
    })

    return {
      render() {
        un = renderComponent({
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
  <div>
  <h3>Vue Component</h3>
  <div class="value">
    <div id="vue-dom"></div>
    <button @click="render">vue render</button>
  </div>
  </div>
</template>
