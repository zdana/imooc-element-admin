<template>
  <div class="home">
    <top-view />
    <sale-view />
    <buttom-view />
    <map-view />
  </div>
</template>

<script>
  import TopView from './components/TopView'
  import SaleView from './components/SaleView'
  import ButtomView from './components/ButtomView'
  import MapView from './components/MapView'
  import { wordCloud, mapScatter, screenData } from '@/api/home'
  export default {
    name: 'Home',
    components: {
      TopView,
      SaleView,
      ButtomView,
      MapView
    },
    data() {
      return {
        reportData: null,
        wordCloud: null,
        mapData: null
      }
    },
    methods:{
      // 
      getReportData(){
        // console.log(this.reportData);
        return this.reportData
      },
      getWordCloud(){
        return this.wordCloud
      },
      getMapData(){
        // console.log(this.mapData);
        return this.mapData
      }
    },
    // 父组件中返回要传给下级的数据
    provide(){
      return{
        getReportData:this.getReportData,
        getWordCloud:this.getWordCloud,
        getMapData:this.getMapData
      }
    },
    mounted() {
      // 调用接口，接收api中传过来的数据
      screenData().then(data => this.reportData = data),
      wordCloud().then(data => this.wordCloud = data),
      mapScatter().then(data => this.mapData = data)
    }
  }
</script>
<style>
  .home {
    width: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>