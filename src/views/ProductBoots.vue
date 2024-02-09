<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
  <div class="row row-cols-2 row-cols-lg-4 d-flex justify-content-start flex-wrap g-3 mt-2 mb-3">
    <div class="col" v-for="item in filterData" :key="item.id">
      <div class="card h-100">
        <a href="#" @click.prevent="getProduct(item.id)">
          <img :src="item.imageUrl" class="card-img-top" alt="產品圖示" />
        </a>
        <div class="card-body">
          <h5 class="card-title text-dark m-0">{{ item.title }}</h5>
        </div>
        <div class="card-footer border-0">
          <button
            type="button"
            class="btn btn-primary w-100 text-nowrap px-0"
            @click="addCart(item.id)"
            :disabled="this.status.loadingItem === item.id">
            <div
              v-if="this.status.loadingItem === item.id"
              class="spinner-border text-warning spinner-border-sm"
              role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      productsAll: [],
      pagination: {},
      filterData: [],
      isLoading: false,
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
  components: {},
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.productsAll = res.data.products;
          this.filterData = this.productsAll.filter((item) => item.category === '靴子');
          console.log(this.filterData);
        }
      });
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = '';
        this.$httpMessageState(res, '加入購物車');
        console.log(res);
        emitter.emit('updateCart');
      });
    },
  },
  computed: {},
  mounted() {
    this.getProducts();
  },
};
</script>
