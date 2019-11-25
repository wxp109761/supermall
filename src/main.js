import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import router from './router'//进行挂载


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store:store
}).$mount('#app')



var store =new Vuex.Store({
  state:{
    totalcount:1
  },
  mutations:{
    updatecount(state,arg){
      state.totalcount=arg
    }
  }
})
