<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-item" :class="{active :currentindex===index}" @click="tableClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            currentindex:0      
        }
    },

    methods: {
        tableClick(index){
            this.currentindex=index;
        }
    },
    
};
</script>
<style scoped>

.tab-control{
    display: flex;
    line-height: 40px;
    height: 40px;
    font-size: 15px;
    text-align: center
}
.tab-item span{
    padding: 5px;
}
.tab-item{
    flex: 1;
}
.active span{

    border-bottom: 5px solid red
}
</style>