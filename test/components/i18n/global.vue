<script lang="ts">
import { defineComponent } from 'vue'
import { VariousComponentProps } from '@variousjs/various'

const V = defineComponent({
  props: {
    various: Object as VariousComponentProps,
  },

  setup(props) {
    return {
      t: props.various?.$t || (() => null),
      update() {
        props.various?.$t.update({ resources: {
          jp: { title: 'update JP' },
        } }, 'app')
      },
    }
  }
})

export default V
</script>

<template>
  <div style="padding: 20px">
    <h3>Global (Vue)</h3>
    <div class="value">
      <p>title: {{ t('title') }}</p>
      <button @click="update">update global</button>
    </div>
  </div>
</template>
