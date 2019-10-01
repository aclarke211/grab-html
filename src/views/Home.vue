<template>
  <div class="home">
    <h1
      :class="`${className}__title`"
      v-html="title" />

      <Scraper />
  </div>
</template>

<script>
import Scraper from '@/components/Scraper.vue';

export default {
  name: 'Home',

  components: {
    Scraper,
  },

  data: () => ({
    className: 'home',
    title: 'Site Content',
  }),
};
</script>
