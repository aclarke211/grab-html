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
const browserless = require('browserless');

export default {
  name: 'getHTML',

  data: () => ({
    className: 'get-html',
    title: 'Get HTML',
    htmlResult: '',
    siteUrl: 'https://google.com',
  }),

  methods: {
    getHTMLData(siteUrl) {
      (async () => {
        const html = await browserless.html(siteUrl);
        // eslint-disable-next-line
        console.log(html)
      })();
    },
  },

  mounted() {
    this.getHTMLData(this.siteUrl);
  },
};
</script>
