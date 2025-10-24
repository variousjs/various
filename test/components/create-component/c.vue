<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { VueVarious } from '@variousjs/various'
import { Store } from '../../types'

const V = defineComponent({
  props: {
    various: Object as PropType<VueVarious<Store>>,
    name: String,
  },
})

export default V
</script>

<template>
  <div>props name: {{ name }} / store name: {{ various?.$store.name }}</div>
</template>
