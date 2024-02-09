<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
  <div class="vh-100">
    <div class="text-end my-3 me-5">
      <button class="btn btn-primary" type="button" @click.prevent="openModal(true)">
        新增品項
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="100">引進價格</th>
          <th width="100">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
          <td class="text-right">{{ $filters.currency(item.price) }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled === 1">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click.prevent="openModal(false, item)">
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm" @click.prevent="openDelModal(item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationComponent :pages="pagination" @emit-pages="getProducts"></PaginationComponent>
  </div>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updatedProduct"></ProductModal>
  <DelModal ref="delModal" :item="tempProduct" @del-item="delProduct"></DelModal>
</template>

<script>
import ProductModal from '@/components/ProductModel.vue';
import DelModal from '@/components/DelModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
    PaginationComponent,
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updatedProduct(item) {
      this.tempProduct = item;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethods = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        this.isLoading = true;
        httpMethods = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethods](api, { data: this.tempProduct }).then((res) => {
        this.isLoading = false;
        productComponent.hideModal();
        if (res.data.success) {
          this.getProducts();
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功',
          });
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新失敗',
            content: res.data.message.join('、'),
          });
        }
      });
    },
    openDelModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.isLoading = true;
      this.$http.delete(url).then(() => {
        this.isLoading = false;
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getProducts();
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
