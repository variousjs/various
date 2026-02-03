<script lang="ts">
import { defineComponent } from 'vue'
import { VariousComponentProps } from '@variousjs/various'
import { Store } from '../../types'

const V = defineComponent({
  props: {
    various: Object as VariousComponentProps<Store>,
    name: String,
  },
})

export default V
</script>

<template>
  <div>props name: {{ name }} / store name: {{ various?.$store.name }}</div>
</template>
