<template>
  <div class="home">
    <h1
      :class="`${className}__title`"
      v-html="title" />

      <StoreManager />
      <Scraper />
  </div>
</template>

<script>
import Scraper from '@/components/Scraper.vue';
import StoreManager from '@/components/StoreManager.vue';

export default {
  name: 'Home',

  components: {
    Scraper,
    StoreManager,
  },

  data: () => ({
    className: 'home',
    title: 'Site Content',
  }),
};
</script>
