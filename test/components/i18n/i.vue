<script lang="ts">
import { defineComponent } from 'vue'
import { VueVarious, I18n } from '@variousjs/various'
import zh from './zh.json'
import en from './en.json'

const V = defineComponent({
  props: {
    various: Object as VueVarious,
  },

  setup(props) {
    return {
      t: props.various?.$t || (() => null),
      update() {
        props.various?.$t.update({ lngStoreKey: 'no-exist' })
      },
    }
  }
})

V.$i18n = (() => {
  return { lngStoreKey: 'locale', resources: { zh, en } }
}) as I18n

export default V
</script>

<template>
  <h3>Vue Component</h3>
  <div class="value">
    <p>name: {{ t('name') }}</p>
    <p>greet: {{ t('greet', { name: 'C', name2: 'D' }) }}</p>
    <button @click="update">vue update lngStoreKey</button>
  </div>
</template>
