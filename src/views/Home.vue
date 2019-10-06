<template>
  <div class="home">
    <h1
      :class="`${className}__title`"
      v-html="title" />

      <Scraper
        :siteUrl="$store.state.sites[0].url"
        :itemsIdentifier="$store.state.sites[0].items.identifier" />
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

<style lang="scss">
.home {
  padding: 1rem;
}
</style>
