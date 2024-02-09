<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
  <div class="bg-light">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-lg-5 mx-0 mx-lg-3">
          <div class="my-4">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner d-flex" v-if="product.images">
                <div class="carousel-item active">
                  <img :src="product.imageUrl" class="d-block w-100" alt="產品圖示" />
                </div>
                <div class="carousel-item">
                  <img :src="product.images[0]" class="d-block w-100" alt="產品圖示" />
                </div>
                <div class="carousel-item">
                  <img :src="product.images[1]" class="d-block w-100" alt="產品圖示" />
                </div>
                <div class="carousel-item">
                  <img :src="product.images[2]" class="d-block w-100" alt="產品圖示" />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="my-4">
            <div class="text-dark">
              <h3>{{ product.title }}</h3>
              <p class="fs-4">NT${{ $filters.currency(product.price) }}</p>
            </div>
            <hr />
            <div class="my-3">
              <select class="form-select text-center" v-model="size">
                <option value="" disabled>請選擇尺寸</option>
                <option v-for="item in productSize" :key="item.choose">{{ item.choose }}</option>
              </select>
            </div>
            <div class="mb-3">
              <div class="input-group">
                <input
                  type="number"
                  class="form-control text-center"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  v-model="productsQty"
                  min="1" />
              </div>
            </div>
            <div class="mb-3 d-flex flex-column">
              <button
                class="btn btn-outline-primary mb-3"
                @click="addCart(product.id)"
                :disabled="this.status.loadingItem === product.id">
                <div
                  v-if="this.status.loadingItem === product.id"
                  class="spinner-border text-dark spinner-border-sm"
                  role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                加入購物車
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="buyNow(product.id)"
                :disabled="this.status.loadingItemBuy === product.id">
                <div
                  v-if="this.status.loadingItemBuy === product.id"
                  class="spinner-border text-dark spinner-border-sm"
                  role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                立即購買
              </button>
            </div>
            <p>{{ product.description }}</p>
            <p>
              {{ product.content }}
            </p>
          </div>
        </div>
        <div class="col-lg-9">
          <h3 class="mb-4">你可能有興趣</h3>
          <swiper-container
            slides-per-view="2"
            pagination="true"
            :breakpoints="{
              768: {
                slidesPerView: 5,
              },
            }"
            speed="500"
            class="row row-cols-3 row-cols-lg-9 justify-content-center gx-2 pb-3">
            <swiper-slide class="col-4 col-lg-2" v-for="item in filterProducts" :key="item.id">
              <div class="col">
                <div class="card h-100">
                  <a href="#" @click.prevent="goProduct(item.id)">
                    <img :src="item.imageUrl" class="card-img-top" alt="產品圖示" />
                  </a>
                  <div class="card-body">
                    <h5 class="card-title text-dark m-0">{{ item.title }}</h5>
                  </div>
                  <div class="card-footer border-0">
                    <button
                      class="btn btn-primary w-100"
                      @click="addCart(item.id)"
                      :disabled="this.status.loadingItem === item.id">
                      <div
                        v-if="this.status.loadingItem === item.id"
                        class="spinner-border text-dark spinner-border-sm"
                        role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
  </div>
  <ToastMessages></ToastMessages>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  data() {
    return {
      product: {},
      products: [],
      filter: [],
      filterProducts: [],
      id: '',
      isLoading: false,
      status: {
        loadingItem: '',
        loadingItemBuy: '',
      },
      productsQty: 1,
      productSize: [
        // { choose: 'XS' },
        // { choose: 'S' },
        { choose: 'M' },
        // { choose: 'L' },
        // { choose: 'XL' },
      ],
      size: '',
    };
  },
  components: {
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  inject: ['reload'],
  methods: {
    async getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      const res = await this.$http.get(api);
      this.isLoading = false;
      if (res.data.success) {
        this.product = res.data.product;
      }
    },
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          /* eslint-disable */
          this.filter = this.products.filter(
            (product) =>
              product.category === this.product.category && this.product.id !== product.id
          );
          function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
          const ary = new Set([]);
          for (
            let index = 0;
            ary.size < (this.filter.length < 5 ? this.filter.length : 5);
            index + 1
          ) {
            const num = getRandomInt(this.filter.length);
            ary.add(num);
          }
          ary.forEach((item) => {
            this.filterProducts.push(this.filter[item]);
          });
        }
      });
    },
    addCart(id, qty = this.productsQty) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      /* eslint-disable */
      const size = this.size;
      this.$http.post(url, { data: cart, size }).then((res) => {
        this.status.loadingItem = '';
        this.$httpMessageState(res, '加入購物車');
        console.log(res);
        emitter.emit('updateCart');
      });
    },
    buyNow(id, qty = this.productsQty) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItemBuy = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItemBuy = '';
        console.log(res);
        if (res.data.success) {
          emitter.emit('updateCart');
          this.$router.push('/cart');
        }
      });
    },
    goProduct(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  async created() {
    this.id = this.$route.params.productId;
    await this.getProduct();
    this.getProducts();
  },
  mounted() {},
};
</script>
