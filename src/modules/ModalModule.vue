<template>
  <div
    v-if="showModal"
    :class="[`${className}`, `${className}__outer`]"
    @click.self="$emit('modal-outer-clicked')">
    <div
      :class="`${className}__inner`">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalModule',

  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    className: 'modal-module',
  }),
};
</script>

<style lang="scss">
.modal-module {
  &__outer {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    background-color: #202020f6;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s;
  }

  &__inner {
    background-color: white;
    padding: 3rem;
    box-shadow: 1px 1px 3px 2px #3f3f3f;
  }
}
</style>
