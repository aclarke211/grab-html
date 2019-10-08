<template>
  <div :class="className">
    <div :class="`${className}__links`">
      <div
        v-for="(link, linkKey) in links"
        :key="linkKey"
        :class="[`${className}__link`, {'active': link.route === $store.state.currentRoute}]"
        @click="changeRoute(link.route)">
        {{ link.text }}
      </div>
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
        text: 'SETTINGS',
        route: 'settings',
      },
    ],
  }),

  methods: {
    changeRoute(route) {
      this.$router.push({
        name: route,
      });
    },
  },
};
</script>

<style lang="scss">
.navigation {
  $nav_backgroundColor: lightseagreen;

  background-color: $nav_backgroundColor;
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &__links {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  }

  &__link {
    margin: .5rem 1rem;
    color: gainsboro;
    font-size: .85rem;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all .5s;
    text-align: center;

    &:hover {
      color: whitesmoke;
    }

    &.active {
      color: white;
      border-color: white;

      &:hover {
        color: white;
      }

    }
  }
}
</style>
