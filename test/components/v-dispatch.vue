<template>
  <button
    @click="handleClick"
  >
    {{ text }}
  </button>
  <p>name: {{ name }}</p>
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

const relative = ref({ t: 'current' })

const C = defineComponent({
  name: 'MyButton',
  props: {
    text: String,
    name: String,
    variousLogger: Object,
    variousDispatch: Function,
    variousPostMessage: Function,
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
        props.variousLogger.info('lohaa')
      },
      postMessage() {
        props.variousPostMessage('vue-component', 'ready')
      },
      dispatch() {
        props.variousDispatch({
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

export default C
</script>
