<template>
  <div :class="className">
    <div :class="`${className}__links`">
      <router-link
        v-for="(link, linkKey) in links"
        :key="linkKey"
        :to="{ name: link.route }"
        :class="[`${className}__link`, {'active': link.route}]">
        {{ link.text }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',

  data: () => ({
    className: 'navigation',
    links: [
      {
        text: 'HOME',
        route: 'home',
      },
      {
        text: 'EDIT STORE',
        route: 'edit-store',
      },
    ],
  }),
};
</script>

<style lang="scss">
.navigation {
  $nav_backgroundColor: lightseagreen;

  background-color: $nav_backgroundColor;
  padding: 2rem;

  &__links {
    border: 1px solid gainsboro;
  }

  &__link {
    margin: 1rem;
    color: gainsboro;
    font-size: .85rem;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid transparent;

    &.active {
      color: white;
      border-color: white;

    }
  }
}
</style>
