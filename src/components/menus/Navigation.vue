<template>
  <div :class="className">
    <div :class="`${className}__links`">
      Links
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',

  data: () => ({
    className: 'navigation',
  }),
};
</script>

<style lang="scss">
.navigation {
  $nav_backgroundColor: lightseagreen;

  background-color: $nav_backgroundColor;
  padding: 2rem;
}
</style>
