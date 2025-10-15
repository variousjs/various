<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { VueVarious } from '@variousjs/various'
import { Store } from '../../types'

const V = defineComponent({
  props: {
    various: Object as PropType<VueVarious<Store>>,
  },
})

export default V
</script>

<template>
  <p>name: {{ various?.$store.name }}</p>
</template>
