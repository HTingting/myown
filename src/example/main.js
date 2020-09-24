import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

// 导入组件库
import PullFresh from '../../components/index.js';
// 注册组件库
Vue.use(PullFresh);

//开启debug模式
Vue.config.debug = true;

//路由配置；可引入文件
const router = new VueRouter({
  esModule: false,
  mode: 'history',
  routes:[
    {
      path: '/hello',
      component: (resolve) => require(['./routers/HelloWorld.vue'], resolve)
    },
    {
      path: '/intersection',
      component: (resolve) => require(['./routers/Intersection.vue'], resolve)
    },
    {
      path: '/pull-fresh',
      component: (resolve) => require(['./routers/pullFresh.vue'], resolve)
    },
    {
      path: '/tabs',
      component: (resolve => require(['./routers/tabs.vue'], resolve))
    },
    {
      path:'/dragger',
      component:(resolve => require(['./routers/dragger.vue'], resolve))
    }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
