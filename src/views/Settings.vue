<template>
  <div :class="className">
    <h1 :class="`${className}__title`">
      {{ title }}
    </h1>
    <StoreManager />
  </div>
</template>

<script>
import StoreManager from '@/components/StoreManager.vue';

export default {
  name: 'Settings',

  components: {
    StoreManager,
  },

  data: () => ({
    className: 'settings',
    title: 'Settings',
  }),
};
</script>

<style lang="scss">
.settings {
  padding: 1rem;
}
</style>
