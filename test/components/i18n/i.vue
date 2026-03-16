<script lang="ts">
import { defineComponent } from 'vue'
import { VariousComponentProps, I18n } from '@variousjs/various'
import zh from './zh.json'
import en from './en.json'

const V = defineComponent({
  props: {
    various: Object as VariousComponentProps,
  },

  setup(props) {
    return {
      t: props.various?.$t || (() => null),
      update() {
        props.various?.$dispatch({
          target: 'app',
          action: 'setLocale',
          payload: props.various.$locale === 'zh' ? 'en' : 'zh'
        })
      },
      updateConfig() {
        props.various?.$t.update({
          resources: {
            zh: { name: '章四' },
            en: { name: 'alice' },
          }
        })
      },
    }
  }
})

V.$i18n = (() => {
  return { resources: { zh, en } }
}) as I18n

export default V
</script>

<template>
  <h3>Vue Component</h3>
  <div class="value">
    <p>name: {{ t('name') }}</p>
    <p>greet: {{ t('greet', { name: 'C', name2: 'D' }) }}</p>
    <button @click="update">vue update locale</button>
    <button @click="updateConfig">vue update config</button>
  </div>
</template>
