<script lang="ts">
import { defineComponent } from 'vue'

const V = defineComponent({
  data() {
    return { a: 0 as any }
  },
})

export default V
</script>

<template>
  <p>{{ a.b.c }}</p>
</template>
