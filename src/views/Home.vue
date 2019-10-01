<template>
  <div class="home">
    <h1
      :class="`${className}__title`"
      v-html="title" />
  </div>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    className: 'home',
    title: 'Site Content',
  }),
};
</script>
