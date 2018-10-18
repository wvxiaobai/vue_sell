import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 定义路由组件
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import './common/js/vconsole.js';
Vue.use(VueRouter);
Vue.use(VueResource);

// 定义路由
const routes = [
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings },
    { path: '/seller', component: seller }
];

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
});

// let app = Vue.extend(App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<app/>',
  router: router
});

router.push('/goods');
