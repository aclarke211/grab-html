<template>
  <div :class="className">
    Settings

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
  }),
};
</script>

<style lang="scss">

</style>
