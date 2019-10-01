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
const axios = require('axios');

export default {
  name: 'Scraper',

  data: () => ({
    className: 'scraper',
    title: 'Get HTML',
    htmlResult: '',
    corsProxy: 'https://cors-anywhere.herokuapp.com',
    siteUrl: 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1',
  }),

  methods: {
    scrapeSite(url) {
      axios(`${this.corsProxy}/${url}`)
        .then((response) => {
          const html = response.data;

          // eslint-disable-next-line
          console.log(html);
        })
        .catch((err) => {
          if (err) {
            // eslint-disable-next-line
            console.error(err);
          }
        });
    },
  },

  mounted() {
    this.scrapeSite(this.siteUrl);
  },
};
</script>
