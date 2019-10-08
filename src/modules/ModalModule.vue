<template>
  <div
    v-if="showModal"
    :class="[`${className}`, `${className}__outer`]"
    @click.self="$emit('modal-outer-clicked')">
    <div
      :class="`${className}__inner`">
      <div
        :class="`${className}__close-btn`"
        v-html="closeButton"
        @click.self="$emit('modal-close-clicked')" />
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

    closeButton: {
      type: String,
      default: '&#215;',
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 3px 2px #3f3f3f;
  }

  &__close-btn {
    font-size: 2rem;
    color: darkgrey;
    transition: all .5s;
    position: absolute;
    top: .5rem;
    right: .75rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.15);
      color: grey;
    }
  }

  &__title {
    border-bottom: 2px solid black;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 1rem 1rem;
    text-align: center;
  }
}
</style>
