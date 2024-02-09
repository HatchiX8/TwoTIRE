import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/product',
    name: 'product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue'),
    children: [
      {
        path: 'All',
        component: () => import('../views/ProductAll.vue'),
      },
      {
        path: 'Helmet',
        component: () => import('../views/ProductHelmet.vue'),
      },
      {
        path: 'Jacket',
        component: () => import('../views/ProductJacket.vue'),
      },
      {
        path: 'Gloves',
        component: () => import('../views/ProductGloves.vue'),
      },
      {
        path: 'Boots',
        component: () => import('../views/ProductBoots.vue'),
      },
    ],
  },
  {
    path: '/brand',
    name: 'brand',
    component: () => import('../views/BrandView.vue'),
  },
  {
    path: '/oderTracking',
    name: 'oderTracking',
    component: () => import('../views/OrderTrackingView.vue'),
  },
  {
    path: '/problem',
    name: 'problem',
    component: () => import('../views/ProblemView.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/OrderView.vue'),
  },
  {
    path: '/checkout/:orderId',
    component: () => import('../views/CheckoutView.vue'),
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/CouponsView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/OrdersView.vue'),
      },
    ],
  },
  {
    path: '/product/:productId',
    component: () => import('../views/ProductItemView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
