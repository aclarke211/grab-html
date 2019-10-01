<template>
  <div class="home">
    <h1
      :class="`${className}__title`"
      v-html="title" />

      <getHTML />
  </div>
</template>

<script>
import getHTML from '@/components/getHTML.vue';

export default {
  name: 'Home',

  components: {
    getHTML,
  },

  data: () => ({
    className: 'home',
    title: 'Site Content',
  }),
};
</script>
