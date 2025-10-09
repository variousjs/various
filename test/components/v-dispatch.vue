<template>
  <button
    @click="handleClick"
  >
    {{ text }}
  </button>
  <p>name: {{ name }}</p>
  <p>i18n: {{ various.$t('title', 'default Title') }}</p>
  <input :value="current.t" />
  <div style="height: 20px;" />
  <button
    @click="log"
  >
    logger
  </button>
  <button
    @click="dispatch"
  >
    dispatch
  </button>
  <button
    @click="postMessage"
  >
    postMessage
  </button>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Zh from './i18n/zh.json'
import En from './i18n/en.json'

const relative = ref({ t: 'current' })

const C = defineComponent({
  name: 'MyButton',
  props: {
    text: String,
    name: String,
    various: Object,
  },
  emits: ['click'],
  data() {
    return {
      current: relative,
    }
  },
  setup(props, { emit }) {
    const handleClick = (event) => {
      emit('click', event);
    };

    return {
      handleClick,
      log() {
        props.various.$logger.info('lohaa')
      },
      postMessage() {
        props.various.$postMessage('vue-component', 'ready')
      },
      dispatch() {
        props.various.$dispatch({
          name: 'app',
          action: 'setName',
          value: new Date().getMilliseconds(),
        })
      },
    };
  }
});

C.inputChange = (v) => {
  relative.value.t = String(v)
}

C.$onMessage = (v) => {
  console.log(v)
}

C.$i18n = async () => {
  await new Promise((r) => setTimeout(r, 1000))

  return {
    localeKey: 'locale',
    resources: {
      zh: Zh,
      en: En,
    },
  }
}

export default C
</script>
