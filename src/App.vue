<template>
  <NavBar></NavBar>
  <router-view v-if="isRouterAlive" class="body" />
  <FooTer></FooTer>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooTer from '@/components/FooTer.vue';

export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  components: {
    NavBar,
    FooTer,
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style lang="scss">
@import './assets/all';
</style>
