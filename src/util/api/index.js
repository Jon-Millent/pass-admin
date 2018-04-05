import axios from 'axios'

class Api{

  constructor(baseUrl){
    this.baseUrl = baseUrl
  }

  get(api, params){
    return axios.get(this.baseUrl + api, {
      params: params
    })
  }

  post(api, params){
    return axios.post(this.baseUrl + api, params)
  }

  // 登录
  login(params){
    return this.post('/user/login', params)
  }

}

export default {
  install(Vue){
    Vue.prototype.$api = new Api('http://localhost:5001/api')
  }
}
