<script lang="ts">
import { defineComponent } from 'vue'
import { VueVarious, I18n } from '@variousjs/various'
import zh from './zh.json'
import en from './en.json'

let resolveFn = (() => null) as any

const V = defineComponent({
  props: {
    various: Object as VueVarious,
  },

  setup(props) {
    return {
      t: props.various?.$t || (() => null),
      update() {
        resolveFn()
      },
    }
  }
})

V.$i18n = (async () => {
  await new Promise((r) => {
    resolveFn = r
  })
  return { lngStoreKey: 'locale', resources: { zh, en } }
}) as I18n

export default V
</script>

<template>
  <div>
  <h3>Vue Async Component</h3>
  <div class="value">
    <p>name: {{ t('name') }}</p>
    <p>greet: {{ t('greet', { name: 'C', name2: 'D' }) }}</p>
    <button @click="update">vue async get config</button>
  </div>
  </div>
</template>
