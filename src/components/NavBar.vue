<template>
  <div class="bg-dark sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-dark p-0 d-flex justify-content-between">
        <h1 class="m-0 navbar-brand">
          <router-link to="/" class="hide-text">TwoTIRE貳輪精品</router-link>
        </h1>
        <div class="dropdown ms-auto order-lg-2 order-lg-3 mx-2 mx-lg-0">
          <a class="p-3" type="button" id="cart" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-cart-fill"></i><span class="d-none">1</span>
          </a>
          <div class="dropdown-menu dropdown-menu-end bg-light" aria-labelledby="cart">
            <div class="px-2">
              <table class="table text-nowrap">
                <thead>
                  <tr class="text-center">
                    <th scope="col" colspan="5" class="fs-5 text-dark">購物車清單</th>
                  </tr>
                </thead>
                <tbody class="text-dark">
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td>{{ item.product.title }}</td>
                    <td class="text-right d-none d-lg-block">M</td>
                    <td class="text-dark">{{ item.qty }}件</td>
                    <td class="text-right text-dark">
                      ${{ $filters.currency(item.product.price) }}
                    </td>
                    <td>
                      <button
                        class="btn btn-outline-danger btn-sm"
                        type="button"
                        @click="removeCartItem(item.id)"
                        :disabled="item.id === status.loadingItem">
                        <i class="bi bi-x"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end mx-2">
                <routerLink to="/cart" href="#" class="btn btn-primary btn-block"
                  >結帳去</routerLink
                >
              </div>
            </div>
          </div>
        </div>
        <button
          class="navbar-toggler bg-warning"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ms-lg-auto">
            <li class="nav-item mx-2">
              <router-link to="/" class="nav-link nav-style">首頁</router-link>
            </li>
            <li class="nav-item dropdown mx-2">
              <a
                class="nav-link dropdown-toggle fs-6 nav-style"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                商品一覽
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <router-link to="/product/All" class="dropdown-item py-2 nav-style"
                    >所有商品</router-link
                  >
                </li>
                <li>
                  <router-link to="/product/Helmet" class="dropdown-item py-2" href="#"
                    >安全帽</router-link
                  >
                </li>
                <li>
                  <router-link to="/product/Jacket" class="dropdown-item py-2" href="#"
                    >上衣</router-link
                  >
                </li>
                <li>
                  <router-link to="/product/Gloves" class="dropdown-item py-2" href="#"
                    >手套</router-link
                  >
                </li>
                <li>
                  <router-link to="/product/Boots" class="dropdown-item py-2" href="#"
                    >靴子</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item mx-2">
              <router-link to="/brand" class="nav-link nav-style" aria-current="page" href="#"
                >關於我們</router-link
              >
            </li>
            <li class="nav-item dropdown mx-2">
              <a
                class="nav-link dropdown-toggle nav-style"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                購買相關
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <router-link to="/oderTracking" class="dropdown-item py-2" href="#"
                    >訂單查詢</router-link
                  >
                </li>
                <li>
                  <router-link to="/problem" class="dropdown-item py-2" href="#"
                    >常見問題</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      cart: [],
      status: {
        loadingItem: '',
      },
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  inject: ['emitter'],
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.cart = res.data.data;
        }
      });
    },
    removeCartItem(id) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then(() => {
        this.getCart();
        this.status.loadingItem = '';
        this.isLoading = false;
        emitter.emit('updateCart');
      });
    },
  },
  created() {
    emitter.on('updateCart', () => {
      this.getCart();
    });
  },
  mounted() {
    this.getCart();
  },
};
</script>
