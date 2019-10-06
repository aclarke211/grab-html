<template>
  <div
    v-if="showModal"
    :class="[`${className}`, `${className}__outer`]"
    @click.self="$emit('modal-outer-clicked')">
    {{ className }}
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
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  opacity: .9;
  background-color: #505050;
}
</style>
