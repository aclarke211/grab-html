<template>
  <div :id="id">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/menus/Navigation.vue';

export default {
  name: 'App',

  components: {
    Navigation,
  },

  data: () => ({
    id: 'app',
  }),

  created() {
    this.$store.commit('update__currentRoute', 'home');
    this.$store.commit('update__currentModalView', 'none');
    this.$router.push({
      name: 'home',
    });
  },

  watch: {
    $route: 'updateRoute',
  },

  methods: {
    updateRoute() {
      this.$store.commit('update__currentRoute', this.$route.name);
    },
  },
};
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  max-width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
