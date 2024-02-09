<template>
  <div class="bg-success">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="ms-2 px-3 mt-4">
            <div class="list-group ProductList">
              <h1 class="fs-3 text-dark text-center mb-0 fw-bold">商品一覽</h1>
              <hr class="text-light my-3" />
              <div class="rounded-3">
                <router-link
                  to="/product/All"
                  href="#"
                  class="list-group-item list-group-item-action list-style"
                  aria-current="true">
                  所有商品
                </router-link>
                <router-link
                  to="/product/Helmet"
                  href="#"
                  class="list-group-item list-group-item-action list-style"
                  >安全帽</router-link
                >
                <router-link
                  to="/product/Jacket"
                  href="#"
                  class="list-group-item list-group-item-action list-style"
                  >上衣</router-link
                >
                <router-link
                  to="/product/Gloves"
                  href="#"
                  class="list-group-item list-group-item-action list-style"
                  >手套</router-link
                >
                <router-link
                  to="/product/Boots"
                  href="#"
                  class="list-group-item list-group-item-action list-style"
                  >靴子</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
