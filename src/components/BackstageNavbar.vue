<template>
  <aside class="sidebar d-flex align-items-start flex-column border-end border-dark">
    <div class="list-group rounded-0 w-100">
      <p href="#" class="list-group-item fs-4 m-0 text-dark" aria-current="true">管理員操作</p>
      <router-link to="/dashboard/products" href="#" class="list-group-item list-group-item-action"
        >產品列表</router-link
      >
      <router-link to="/dashboard/orders" href="#" class="list-group-item list-group-item-action"
        >訂單管理</router-link
      >
      <router-link to="/dashboard/coupons" href="#" class="list-group-item list-group-item-action"
        >優惠碼管理</router-link
      >
    </div>
    <div class="mt-auto w-100 d-flex justify-content-end sticky-bottom">
      <a href="#" class="p-2 rounded-0 text-decoration-none" @click.prevent="logout"
        ><i class="me-1 bi bi-box-arrow-right"></i>登出</a
      >
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.$router.push('/login');
        }
      });
    },
  },
};
</script>
