<template>
  <div :class="className">
    Edit Store

    <StoreManager />

  </div>
</template>

<script>
import StoreManager from '@/components/StoreManager.vue';

export default {
  name: 'EditStore',

  components: {
    StoreManager,
  },

  data: () => ({
    className: 'edit-store',
  }),
};
</script>

<style lang="scss">

</style>
