import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component(resolve){
        require(['@/views/login/login.vue'], resolve)
      }
    },
    {
      path: '/home',
      name: 'home',
      component(resolve){
        require(['@/views/home/index.vue'], resolve)
      },
      children: [
        {
          path: 'movie-up',
          component(resolve){
            require(['@/views/home/movie/movie-up.vue'], resolve)
          }
        },
        {
          path: 'movie-management',
          component(resolve){
            require(['@/views/home/movie/movie-management.vue'], resolve)
          }
        }
      ]
    }
  ]
})
