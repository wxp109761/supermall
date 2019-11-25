const state = {
  goodsList: [],
}
const getters = {
  goodsList: state => state.goodsList,
}
const mutations = {
    upadteGoods(state, goods) {
     state.goodsList=goods;
    }  
  }
  export default {
    state,
    getters,
    mutations
  }