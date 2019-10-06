<template>
  <div :class="className">
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

  props: {
    siteUrl: {
      type: String,
      default: 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1',
    },

    itemsIdentifier: {
      type: String,
      default: '.statsTableContainer > tr',
    },
  },

  data: () => ({
    className: 'scraper',
    title: 'Get HTML',
    htmlResult: '',
    corsProxy: 'https://cors-anywhere.herokuapp.com',
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
          this.htmlResult = filterHTML(this.htmlResult, this.itemsIdentifier);
        }, 2000);
      });
  },
};
</script>
