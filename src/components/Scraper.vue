<template>
  <div :class="className">
      <h1>Store</h1>
      <h2>{{ $store.state }}</h2>
      <button
         @click="() => { $store.commit('toggleCustomConfig', !$store.state.useCustomConfig) }">Toggle Config</button>

    <h3
      :class="`${className}__title`"
      v-html="title" />

    <pre
      :class="`${className}__result`">
      {{ htmlResult }}
    </pre>
  </div>

</template>

<script>
const { scrapeSite, filterHTML } = require('@/utils/scraper');

export default {
  name: 'Scraper',

  data: () => ({
    className: 'scraper',
    title: 'Get HTML',
    htmlResult: '',
    corsProxy: 'https://cors-anywhere.herokuapp.com',
    siteUrl: 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1',
  }),

  computed: {
    currentSiteUrl() {
      return `${this.corsProxy}/${this.siteUrl}`;
    },
  },

  mounted() {
    scrapeSite(this.currentSiteUrl).then((res) => {
      this.title = 'Retrieved Full HTML';
      this.htmlResult = res;
    })
      .then(() => {
        setTimeout(() => {
          this.title = 'Filtered HTML';
          this.htmlResult = filterHTML(this.htmlResult, '.statsTableContainer > tr');
        }, 2000);
      });
  },
};
</script>
