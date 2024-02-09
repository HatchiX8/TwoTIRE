<template>
  <div class="d-flex">
    <BackstageNavbar></BackstageNavbar>
    <main class="main container-fluid">
      <ToastMessages></ToastMessages>
      <router-view />
    </main>
  </div>
</template>

<script>
import BackstageNavbar from '@/components/BackstageNavbar.vue';
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: {
    BackstageNavbar,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  },
};
</script>
