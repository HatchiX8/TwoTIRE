<template>
  <div class="brand-banner">
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center brand-box flex-column"
        data-aos="zoom-in"
        data-aos-duration="3000"
        data-aos-easing="quad">
        <h1 class="text-warning rounded-4 brand-text p-3 text-center">
          品牌精神 <br />
          <span class="payBall">Brand Spirit</span>
        </h1>
      </div>
    </div>
  </div>
  <div class="bg-warning">
    <div class="container">
      <div class="row d-flex justify-content-center gx-6">
        <div class="col-lg-5 pt-3 py-lg-4">
          <h2 class="text-dark fst-italic">在短暫的生命中，追尋長遠的自由</h2>
          <hr class="text-dark" />
          <p class="text-dark">
            <span class="fs-3">TwoTire</span>
            就是兩個輪胎，騎在開闊的公路上，臉上時刻感受到風迎面吹來，跳脫現實的無拘無束，此刻的自由是最為珍貴。
          </p>
          <p class="text-dark">
            我們是由一群喜歡騎車的騎士組成，出門騎車不僅須要安全的裝備，<br />
            同時要充滿個性、獨特的個人風格，因此而建立專門提供有需求的
            <br />騎士們，打造個人的騎士風格。
          </p>
        </div>
        <div class="col-lg-5 pb-3 py-lg-4">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide carousel-fade shadow rounded-3"
            data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="3000">
                <img src="@/assets/img/0.jpg" class="d-block w-100 rounded-3" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="@/assets/img/1.jpg" class="d-block w-100 rounded-3" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="@/assets/img/2.jpg" class="d-block w-100 rounded-3" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <HomeStore></HomeStore>
</template>

<script>
import HomeStore from '@/components/HomeStore.vue';
import AOS from 'aos';

export default {
  components: {
    HomeStore,
  },
  mounted() {
    AOS.init();
  },
};
</script>
