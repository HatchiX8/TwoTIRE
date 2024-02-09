<template>
  <CheckoutBanner></CheckoutBanner>
  <div class="bg-warning">
    <div class="container">
      <div class="row row-cols-lg-10 d-flex justify-content-center py-4">
        <div class="col-lg-7"></div>
        <div class="col-lg-7 mt-3">
          <div class="bg-light px-2 py-3 rounded-3">
            <h4 class="ps-2 fw-bold text-dark">填寫資料</h4>
            <div class="mt-4 row justify-content-center">
              <Form class="col-md-11" v-slot="{ errors }" @submit="createOrder">
                <div class="mb-3">
                  <label for="name" class="form-label">收件人姓名</label>
                  <Field
                    id="name"
                    name="姓名"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['姓名'] }"
                    placeholder="請輸入姓名"
                    rules="required"
                    v-model="form.user.name"></Field>
                  <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors['email'] }"
                    placeholder="請輸入 Email"
                    rules="email|required"
                    v-model="form.user.email"></Field>
                  <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
                </div>

                <div class="mb-3">
                  <label for="tel" class="form-label">收件人電話</label>
                  <Field
                    id="tel"
                    name="電話"
                    type="tel"
                    class="form-control"
                    :class="{ 'is-invalid': errors['電話'] }"
                    placeholder="請輸入電話"
                    :rules="isPhone"
                    v-model="form.user.tel"></Field>
                  <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
                </div>

                <div class="mb-3">
                  <label for="address" class="form-label">收件人地址</label>
                  <Field
                    id="address"
                    name="地址"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['地址'] }"
                    placeholder="請輸入地址"
                    rules="required"
                    v-model="form.user.address"></Field>
                  <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
                </div>

                <div class="mb-3">
                  <label for="pay" class="form-label">付款方式</label>
                  <Field
                    id="pay"
                    as="select"
                    name="付款方式"
                    class="form-select"
                    rules="required"
                    :class="{ 'is-invalid': errors['付款方式'] }"
                    v-model="form.user.pay">
                    <option value="信用卡">信用卡</option>
                    <option value="ATM轉帳">ATM轉帳</option>
                  </Field>
                  <ErrorMessage name="付款方式" class="invalid-feedback"></ErrorMessage>
                </div>

                <div class="mb-3">
                  <label for="message" class="form-label">備註</label>
                  <textarea
                    name=""
                    id="message"
                    class="form-control"
                    cols="30"
                    rows="10"
                    v-model="form.message"></textarea>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="text-end">
                    <router-link to="cart" class="btn btn-outline-primary" type="button"
                      >上一步</router-link
                    >
                  </div>
                  <div class="text-end">
                    <button class="btn btn-outline-primary" type="submit">下一步</button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import CheckoutBanner from '../components/CheckoutBanner.vue';

export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          pay: '',
        },
        message: '',
      },
    };
  },
  components: {
    CheckoutBanner,
  },
  methods: {
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order }).then((res) => {
        console.log(res);
        console.log(res.data.orderId);
        /* eslint-disable */
        const orderId = res.data.orderId;
        console.log(orderId);
        this.$router.push(`/checkout/${orderId}`);
      });
    },
    isPhone(value) {
      if (!value) {
        return '電話 為必填';
      }
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '電話 須為有效的電話號碼';
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>
