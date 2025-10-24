<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { VueVarious } from '@variousjs/various'

const V = defineComponent({
  props: {
    various: Object as PropType<VueVarious>,
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
