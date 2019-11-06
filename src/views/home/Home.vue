<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
//组件
import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from "./childComponents/HomeSwiper"

//获取数据
import { getHomeMultidata } from "network/home"

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },

  created() {
    this.getHomeMultidata();
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    }
  }
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>