<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
  <CheckoutBanner></CheckoutBanner>
  <div class="bg-warning">
    <div class="container">
      <div class="row row-cols-lg-10 d-flex justify-content-center py-lg-4">
        <div class="col-12 col-lg-7 my-3 my-lg-0">
          <div class="bg-light px-2 py-3 rounded-3">
            <h4 class="ps-2 fw-bold text-dark">購物車內容</h4>
            <table class="">
              <thead>
                <tr class="text-center">
                  <th width="150" class="d-none d-lg-block"></th>
                  <th width="160">產品名稱</th>
                  <th width="100">尺寸</th>
                  <th width="65">數量</th>
                  <th width="120">單價</th>
                  <th width="50"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center" v-for="item in cart.carts" :key="item.id">
                  <img
                    :src="item.product.imageUrl"
                    class="d-block w-100 d-none d-lg-block"
                    alt="產品圖" />
                  <td>{{ item.product.title }}</td>
                  <td class="px-3">
                    <select class="form-select">
                      <option v-for="item in productSize" :key="item.choose">
                        {{ item.choose }}
                      </option>
                    </select>
                  </td>
                  <td class="text-right">
                    <div class="input-group mt-lg-1">
                      <input
                        type="number"
                        class="form-control text-center"
                        placeholder="1"
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                        v-model.number="item.qty"
                        min="1"
                        max="99"
                        onkeydown="return false"
                        :disabled="item.id === this.status.loadingItem"
                        @change="updateCart(item)" />
                    </div>
                  </td>
                  <td>
                    <span class="text-danger">${{ $filters.currency(item.product.price) }}</span>
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
          </div>
        </div>
        <div class="col-lg-3 sticky-top z-1" style="height: 100%; top: 80px">
          <div class="bg-light rounded-3 px-2 py-3 mb-3">
            <h5 class="ps-2 fw-bold text-dark">優惠碼</h5>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
                aria-label="請輸入優惠碼"
                aria-describedby="btnGroupAddon"
                v-model="coupon_code" />
              <button
                class="input-group-text btn btn-primary"
                id="btnGroupAddon"
                @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
          <div class="bg-light rounded-3 px-2 mb-3 py-3">
            <h5 class="ps-2 fw-bold text-dark">小記明細</h5>
            <table class="table align-middle">
              <tbody>
                <tr>
                  <th colspan="2" class="text-dark">商品金額</th>
                  <td class="text-end text-dark">${{ $filters.currency(cart.total) }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colspan="2" class="text-dark">總計</th>
                  <td class="text-end text-danger fs-3">
                    ${{ $filters.currency(cart.final_total) }}
                  </td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                  <th colspan="2" class="text-dark"></th>
                  <td class="text-end text-success">已套用優惠券</td>
                </tr>
              </tfoot>
            </table>
            <router-link to="order" class="btn btn-outline-primary w-100">下一步</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import emitter from '@/methods/emitter';
import CheckoutBanner from '../components/CheckoutBanner.vue';

export default {
  data() {
    return {
      cart: [],
      isLoading: false,
      status: {
        loadingItem: '',
      },
      coupon_code: '',
      productSize: [
        // { choose: 'XS' },
        // { choose: 'S' },
        { choose: 'M' },
        // { choose: 'L' },
        // { choose: 'XL' },
      ],
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  inject: ['emitter'],
  components: {
    CheckoutBanner,
  },
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
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart }).then(() => {
        this.status.loadingItem = '';
        this.getCart();
        emitter.emit('updateCart');
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
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(url, { data: coupon }).then(() => {
        this.getCart();
        this.coupon_code = '';
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
    AOS.init();
  },
};
</script>
