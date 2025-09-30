<template>
  <button
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script>
import { defineComponent } from 'vue';

const C = defineComponent({
  name: 'MyButton',
  props: {
    text: String,
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (event) => {
      emit('click', event);
    };

    return {
      handleClick
    };
  }
});

C.aa = (v) => {
  console.log(v)
}

export default C
</script>
