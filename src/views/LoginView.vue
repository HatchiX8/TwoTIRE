<template>
  <div class="container my-lg-7">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">管理員登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">帳號</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="請輸入電子郵箱"
            required
            autofocus
            v-model="user.username" />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">密碼</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="請輸入密碼"
            required
            v-model="user.password" />
        </div>

        <div class="text-end mt-4 mb-3">
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expired=${new Date(expired)}`;
          console.log(res);
          this.$router.push('/dashboard/products');
        }
      });
    },
  },
};
</script>
