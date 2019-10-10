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
        <h2
          v-if="title"
          :class="`${className}__title`"
          v-html="title" />

      <slot />

      <div
        v-if="buttons.length"
        :class="[`${className}__btns-container`, buttonsDirection]">
          <button
            v-for="(btn, btnKey) in buttons"
            :key="btnKey"
            :class="`${className}__btn`"
            v-html="btn.text"
            @click="btn.onClick" />
      </div>

    </div>
  </div>
</template>

<script>
import InputModule from '@/modules/InputModule.vue';

export default {
  name: 'ModalModule',

  components: {
    InputModule,
  },

  props: {
    showModal: {
      type: Boolean,
      default: false,
    },

    closeButton: {
      type: String,
      default: '&#215;',
    },

    title: {
      type: String,
      default: 'Modal Title',
    },

    buttons: {
      type: Array,
      default: () => ([
        {
          text: 'Modal Button',
          /* eslint-disable-next-line */
          onClick: () => { alert('Modal Button Clicked'); },
        },
        {
          text: 'Modal Button',
          /* eslint-disable-next-line */
          onClick: () => { alert('SECOND Modal Button Clicked'); },
        },
      ]),
    },

    buttonsDirection: {
      type: String,
      default: 'horizontal',
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
    padding: 3rem 2rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 50vw;
    max-width: 70vw;
    max-height: 80vh;
    overflow-y: auto;
    overflow-x: none;
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

  &__slot {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }

  &__title {
    border-bottom: 2px solid black;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 1rem 1.5rem;
    padding: 0;
    text-align: center;
  }

  &__btns-container {
    padding: .5rem;
    margin: .5rem;
    display: flex;
    justify-content: center;

    &.horizontal {
      flex-flow: row wrap;
    }

    &.vertical {
      flex-direction: column;

      .modal-module__btn {
        flex: 1;
      }
    }
  }

  &__btn {
    $color__btnPrimary: gainsboro;
    $color__btnSecondary: black;
    $color__btnHover: grey;

    border: 1px solid $color__btnPrimary;
    outline: none;
    background-color: $color__btnPrimary;
    color: $color__btnSecondary;
    padding: .75rem 2rem;
    font-size: .85rem;
    border-radius: .25rem;
    transition: all .5s;
    cursor: pointer;
    margin: .5rem 1rem;
    flex: 1;

    @media only screen and (min-width: 767px) {
      flex: unset;
    }

    &:hover {
      background-color: lighten($color__btnPrimary, 10%),
    }

    &:active {
      transition: background-color .25s;
      background-color: seagreen;
    }
  }
}
</style>
