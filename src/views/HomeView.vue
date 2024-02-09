<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
  <!-- banner -->
  <div class="banner bg-dark d-none d-lg-block">
    <div
      class="bannerText rounded-4"
      data-aos="zoom-in"
      data-aos-delay="3000"
      data-aos-duration="3000"
      data-aos-easing="quad">
      <p class="text-warning fs-1 payBall p-5 text-center m-0">Rider Of Life</p>
    </div>
    <video autoplay muted loop class="m-0">
      <source src="@/videos/background.mp4" />
    </video>
  </div>

  <!-- signboard -->
  <div class="bg-success py-lg-4 parallax section">
    <div class="container">
      <div class="row">
        <div
          class="col-11 col-lg-5 mt-3 ms-3 ms-lg-6 p-lg-3"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="350"
          data-aos-once="false">
          <h2 class="text-warning fst-italic fw-normal shadow-sm">騎車也是生活的一部份</h2>
          <p class="m-0 fs-5 text-warning fst-italic fw-light lh-lg">
            當跨坐上車的瞬間，自由的靈魂伴隨著引擎聲馳騁在公路上，皮夾克流露出騎士的熱血，叛逆不羈的特質更能彰顯個性及品味。
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- HomeCard -->
  <div class="bg-dark border-top border-bottom border-5 border-dark">
    <div class="container pb-2">
      <div class="row">
        <div class="col">
          <h2 class="text-center my-4 text-warning payBall">Catagories</h2>
        </div>
      </div>
      <div class="row gy-3 gx-3 mb-2 mb-lg-4">
        <div class="col-6 col-lg-3">
          <div class="card bg-primary box shadow">
            <img
              src="@/assets/img/homeCard-1.jpg"
              class="card-img-top rounded-2"
              alt="風格安全帽示意圖" />
            <router-link to="/product/Helmet">
              <div class="boxHover rounded-2">
                <p class="payBall text-warning fs-3 mb-3 ms-4">Helmet</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="card bg-primary box shadow">
            <img
              src="@/assets/img/homeCard-2.jpg"
              class="card-img-top rounded-2"
              alt="風格皮衣示意圖" />
            <router-link to="/product/Jacket">
              <div class="boxHover rounded-2">
                <p class="payBall text-warning fs-3 mb-3 ms-4">Jacket</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="card bg-primary box shadow">
            <img
              src="@/assets/img/homeCard-3.jpg"
              class="card-img-top rounded-2"
              alt="風格手套示意圖" />
            <router-link to="/product/Gloves">
              <div class="boxHover rounded-2">
                <p class="payBall text-warning fs-3 mb-3 ms-4">Gloves</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="card bg-primary box shadow">
            <img
              src="@/assets/img/homeCard-4.jpg"
              class="card-img-top rounded-2"
              alt="風格車靴示意圖" />
            <router-link to="/product/Boots">
              <div class="boxHover rounded-2">
                <p class="payBall text-warning fs-3 mb-3 ms-4">Boots</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- signboard2 -->
  <div class="bg-success back py-2 py-lg-4">
    <div class="container">
      <div class="row d-flex justify-content-center gx-3 gx-lg-5">
        <div
          class="col-6 col-lg-4 mt-3"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          data-aos-duration="500">
          <div class="ms-2 ms-lg-4">
            <h2 class="text-warning animate__backInLeft">打造屬於自己的獨特風格</h2>
            <p class="p-0 fs-4 text-warning payBall">Personal Style</p>
          </div>
          <routerLink to="/product/All" class="hoverBox d-none d-lg-block">
            <img src="@/assets/img/signboard-2.jpg" class="rounded-3 image-fluid hoverImg" alt="" />
            <img src="@/assets/img/signboard-3.jpg" class="rounded-3 image-fluid" alt="" />
          </routerLink>
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide carousel-fade d-block d-lg-none mb-2"
            data-bs-ride="carousel"
            data-bs-touch="false"
            data-bs-wrap="true">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="3000">
                <img src="@/assets/img/signboard-2.jpg" class="d-block w-100 rounded-3" alt="" />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="@/assets/img/signboard-3.jpg" class="d-block w-100 rounded-3" alt="" />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="@/assets/img/signboard-6.jpg" class="d-block w-100 rounded-3" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-6 col-lg-4"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          data-aos-duration="500">
          <routerLink to="/product/All" class="hoverBox d-none d-lg-block">
            <img src="@/assets/img/signboard-4.jpg" class="rounded-3 image-fluid hoverImg" alt="" />
            <img src="@/assets/img/signboard-5.jpg" class="rounded-3 image-fluid" alt="" />
          </routerLink>
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide carousel-fade d-block d-lg-none mt-4"
            data-bs-ride="carousel"
            data-bs-touch="false"
            data-bs-wrap="true">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="4000">
                <img src="@/assets/img/signboard-4.jpg" class="d-block w-100 rounded-3" alt="" />
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img src="@/assets/img/signboard-5.jpg" class="d-block w-100 rounded-3" alt="" />
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img src="@/assets/img/signboard-7.jpg" class="d-block w-100 rounded-3" alt="" />
              </div>
            </div>
          </div>
          <div>
            <p class="p-0 payBall text-warning text-end fs-5 mt-4 mt-lg-5">
              Common person, <br />Uncommon affair
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- HomeProducts -->
  <div class="bg-dark">
    <div class="container">
      <p class="m-0 fs-4 py-2 neon d-flex align-item-center justify-content-center">
        門市新開幕<i class="bi bi-exclamation-lg"></i>全館商品<span class="fs-4 fw-bold mx-lg-1"
          >9</span
        >折<i class="bi bi-exclamation-lg"></i>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          點我領取
        </button>
      </p>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-success">
              <h5 class="modal-title text-warning fw-bold" id="exampleModalLabel">領取折價券</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="p-0 text-dark">
                新門市開幕，全館商品<span class="fs-4 fw-bold mx-1">9</span>折。<br />
                到店即享<span class="fs-4 fw-bold mx-1">9</span>折優惠，網路門市輸入折扣碼:
                <span class="fs-4 text-danger">rider777</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 經典 -->

  <div class="bg-primary">
    <div class="container">
      <h2 class="text-center text-warning py-3 m-0 payBall">Classic Legend</h2>
      <swiper-container
        slides-per-view="2"
        :breakpoints="{
          768: {
            slidesPerView: 5,
          },
        }"
        pagination="true"
        speed="500"
        loop="true"
        class="row row-cols-3 row-cols-lg-9 justify-content-center gx-2 pb-3">
        <swiper-slide class="col-4 col-lg-2" v-for="item in filterProducts" :key="item.id">
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
                @click="goProduct(item.id)"
                :disabled="this.status.loadingItem === item.id">
                <div
                  v-if="this.status.loadingItem === item.id"
                  class="spinner-border text-dark spinner-border-sm"
                  role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                查看更多
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>

  <HomeStore></HomeStore>
</template>

<script>
// @ is an alias to /src
import HomeStore from '@/components/HomeStore.vue';

import AOS from 'aos';

export default {
  name: 'HomeView',
  data() {
    return {
      products: [],
      filterProducts: [],
      isLoading: false,
      status: {
        loadingItem: '',
        loadingItemBuy: '',
      },
      id: '',
    };
  },
  components: {
    HomeStore,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          /* eslint-disable */

          function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
          const ary = new Set([]);
          for (
            let index = 0;
            ary.size < (this.products.length < 5 ? this.products.length : 5);
            index + 1
          ) {
            const num = getRandomInt(this.products.length);
            ary.add(num);
          }
          ary.forEach((item) => {
            this.filterProducts.push(this.products[item]);
          });
        }
      });
    },
    goProduct(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {
    AOS.init();
  },
};
</script>
