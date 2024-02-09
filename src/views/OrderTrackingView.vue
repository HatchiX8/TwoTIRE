<template>
  <div class="bg-primary">
    <div class="container">
      <div class="row row-cols-lg-1 d-flex justify-content-center flex-wrap">
        <div class="col-lg-3 d-flex flex-column mt-3">
          <div class="d-flex flex-column">
            <h2 class="text-warning m-0 text-center">訂單查詢</h2>
            <hr class="text-warning" />
            <form class="mb-3">
              <p class="fs-3 mb-3 text-center text-warning">請輸入訂單編號</p>
              <input
                class="form-control text-dark text-center"
                type="search"
                placeholder="輸入訂單編號"
                aria-label="Search"
                v-model="orderNum"
                disabled />
            </form>
            <button
              class="btn btn-dark text-warning text-nowrap text-center mb-3"
              type="submit"
              @click="searchOrders">
              搜尋
            </button>
          </div>
        </div>
      </div>
      <div class="row" v-show="showBox">
        <div class="col-lg-8">
          <div class="bg-light px-2 py-3 rounded-3 mb-3">
            <h4 class="ps-2 fw-bold text-dark">訂單明細</h4>
            <table class="">
              <thead>
                <tr class="text-center">
                  <th width="180" class="d-none d-lg-block"></th>
                  <th width="150">產品名稱</th>
                  <th width="80">尺寸</th>
                  <th width="100">數量</th>
                  <th width="120">價格(非折扣後)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center" v-for="item in orderProducts" :key="item.product">
                  <img :src="item.product.imageUrl" class="d-none d-lg-block w-100" alt="產品圖" />
                  <td>{{ item.product.title }}</td>
                  <td class="text-right">M</td>
                  <td class="text-right">{{ item.qty }}</td>
                  <td>
                    <span class="text-danger">${{ $filters.currency(item.total) }}</span>
                  </td>
                </tr>
                <tr>
                  <th colspan="2" class="text-end text-dark">訂單金額</th>
                  <td class="text-end text-danger fs-3">
                    <span class="text-danger">${{ $filters.currency(order.total) }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="d-flex justify-content-start p-2 rounded-3 bg-light mb-3">
            <table class="table pay-style">
              <tbody>
                <tr>
                  <th>訂單編號</th>
                  <td>{{ order.id }}</td>
                </tr>
                <tr>
                  <th>姓名</th>
                  <td>{{ user.name }}</td>
                </tr>
                <tr>
                  <th width="100">Email</th>
                  <td>{{ user.email }}</td>
                </tr>
                <tr>
                  <th>收件人電話</th>
                  <td>{{ user.tel }}</td>
                </tr>
                <tr>
                  <th>收件人地址</th>
                  <td>{{ user.address }}</td>
                </tr>
                <tr>
                  <th>付款方式</th>
                  <td>
                    <span>{{ user.pay }}</span>
                  </td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td>
                    <span v-if="!order.is_paid" class="text-danger">尚未付款</span>
                    <span v-else>付款完成</span>
                  </td>
                </tr>
                <tr v-if="order.message">
                  <th>備註</th>
                  <td>
                    <span>{{ order.message }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBox: false,
      orderNum: '-NqCnZSppyDabSzLPTEv',
      id: '',
      order: {},
      orderProducts: {},
      user: {},
    };
  },
  methods: {
    searchOrders() {
      this.id = this.orderNum;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.order = res.data.order;
          this.orderProducts = this.order.products;
          this.user = this.order.user;
          console.log(this.order);
          this.showBox = true;
        }
      });
    },
  },
};
</script>
