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

        <button
         @click="() => {
        $store.commit('toggleCustomConfig', !$store.state.useCustomConfig) }">Toggle Config</button>
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
};
</script>

<style lang="scss">
.store-manager {
  margin: 4rem;

  &__title {
    font-size: 2rem;
  }

  &__description {
    font-size: 1rem;
  }

  &__heading {
    font-size: 1.5rem;
  }

  &__store-tree {
    font-size: 1.25rem;
  }
}
</style>
