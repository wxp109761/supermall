<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"/>
    <good-list :goods="goods['pop'].list"></good-list>
    <ul>
    <li>2</li>
    <li>3</li>
      <li>2</li>
    <li>3</li>
      <li>2</li>
    <li>3</li>
    </ul>
  </div>
</template>

<script>
//组件
import NavBar from "components/common/navbar/NavBar"
import TabControl from 'components/content/tabControl/TabControl'


import HomeSwiper from "./childComponents/HomeSwiper"
import HomeRecommendView from './childComponents/HomeRecommendView'
import HomeFeatureView from './childComponents/HomeFeature'
import GoodList from 'components/content/goods/GoodsList'

//获取数据
import { getHomeMultidata,getGoodsList } from "network/home"
import goods from 'network/goods.js'
export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,

    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    GoodList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      shopBanne:[],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
    };
  },

  created() {
    this.getHomeMultidata();
    this.getGoodsList('pop',0);
    this.getGoodsList('new',0);
    this.getGoodsList('sell',0);
    this.initComments();
  },
computed: {
	},
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoodsList(type){
      const page=this.goods[type].page+1;
      getGoodsList(type,page).then(res=>{
        //this.goods[type].list.push(...res.data.list);
      })

    },
    initComments() {
			//this.$store.dispatch('getComments')
		}
  },
  computed: {
		comments() {
			return this.$store.getters.getGoodsList
		}
	},

};
</script>
<style scoped>
#home{
  padding-top: 35px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}

.tab-control{
  position: sticky;
  top: 35px;
}
</style>