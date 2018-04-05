// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Api from './util/api'

import Cookie from 'js-cookie'

Vue.use(ElementUI);
Vue.use(Api);

Vue.config.productionTip = false

router.beforeEach((to, from, next)=>{
  if(to.name != 'login'){
    if(!Cookie.get('user')){
      router.push({
        path: 'login'
      })
    }else{
      next()
    }
  }else{
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
