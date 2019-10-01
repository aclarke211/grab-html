<template>
  <div :class="className">
    <h2
      :class="`${className}__title`"
      v-html="title" />
    <p
      :class="`${className}__description`"
      v-html="description" />

      <h3
        :class="`${className}__heading`"
        v-html="'VueX Store Tree'" />
      <pre
        :class="`${className}__store-tree`">{{ storeTree }}</pre>

      <h3
        :class="`${className}__heading`"
        v-html="'Buttons'" />
      <div
        :class="`${className}__btns-container`">
          <button
            :class="`${className}__btn`"
            @click="toggleConfigClicked()">
            Toggle Config
          </button>

            <button
            :class="`${className}__btn`"
            @click="addSiteClicked()">
            Add Site
          </button>
      </div>

  </div>
</template>

<script>
export default {
  name: 'StoreManager',

  data: () => ({
    className: 'store-manager',
    title: 'VueX Store Manager',
    description: 'Used to manage properties in the VueX Store / localstorage.',
  }),

  computed: {
    storeTree() {
      return this.$store.state;
    },
  },

  methods: {
    toggleConfigClicked() {
      this.$store.commit('toggleCustomConfig', !this.$store.state.useCustomConfig);
    },

    addSiteClicked() {
      this.$store.commit('addSite', { name: 'Test Site', url: '/test-site' });
    },
  },
};
</script>

<style lang="scss">
.store-manager {
  margin: 4rem;

  &__title {
    font-size: 2rem;
    margin: .5rem 0;
  }

  &__description {
    font-size: 1rem;
  }

  &__heading {
    font-size: 1.5rem;
    margin: 2rem 0 .25rem 0;
  }

  &__store-tree {
    font-size: 1.25rem;
  }

  &__btns-container {
    display: flex;
    flex-flow: row wrap;
    max-width: 100%;
  }

  &__btn {
    $btnBgColor: gainsboro;

    margin: 1rem;
    background-color: $btnBgColor;
    border: 1px solid $btnBgColor;
    padding: .75rem 2rem;
    font-size: .85rem;
    border-radius: .25rem;
    cursor: pointer;
    transition: all .5s;
    outline: none;

    &:hover {
      background-color: lighten($btnBgColor, 10%);
    }

    &:active {
      transition: background-color .25s;
      background-color: seagreen;
    }
  }
}
</style>
