<template>
  <ve-bmap
    :settings="chartSetting"
    height="100%"
    :title="title"
    :tooltip="{}"
    :series="chartSeries"
  ></ve-bmap>
</template>
<script>
import commonDataMixin from '@/mixins/commonDataMixin'
// 处理获取到的数据
const converData = function (data,geo) {
  const res = [];
  data.forEach((item) => {
    // 遍历获得item中的name，使coord为geoCoordMap[name],即获取name为键的值
    const { name, value } = item;
    const coord = geo[name];
    // 将coord和value存入res中
    res.push({
      name,
      value: [...coord, value],
    });
  });
  return res;
};
export default {
  mixins:[commonDataMixin],
  data() {
    return {
      title: {
        // text: "外卖销售大数据",
        subtext: "销售趋势统计",
        sublink: "https://www.baidu.com",
        left: "center",
      },
      chartSetting: {
        key: "kpE8Pf63lK43RHxuTHObNDnKcFdjnZKo",
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: false,
          mapStyle: {
            styleJson: [
              {
                featureType: "water",
                elementType: "all",
                stylers: {
                  color: "#d1d1d1",
                },
              },
              {
                featureType: "land",
                elementType: "all",
                stylers: {
                  color: "#f3f3f3",
                },
              },
              {
                featureType: "railway",
                elementType: "all",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "highway",
                elementType: "all",
                stylers: {
                  color: "#fdfdfd",
                },
              },
              {
                featureType: "highway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "arterial",
                elementType: "geometry",
                stylers: {
                  color: "#fefefe",
                },
              },
              {
                featureType: "arterial",
                elementType: "geometry.fill",
                stylers: {
                  color: "#fefefe",
                },
              },
              {
                featureType: "poi",
                elementType: "all",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "green",
                elementType: "all",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "subway",
                elementType: "all",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "manmade",
                elementType: "all",
                stylers: {
                  color: "#d1d1d1",
                },
              },
              {
                featureType: "local",
                elementType: "all",
                stylers: {
                  color: "#d1d1d1",
                },
              },
              {
                featureType: "arterial",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "boundary",
                elementType: "all",
                stylers: {
                  color: "#fefefe",
                },
              },
              {
                featureType: "building",
                elementType: "all",
                stylers: {
                  color: "#d1d1d1",
                },
              },
              {
                featureType: "label",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#999999",
                },
              },
            ],
          },
        },
      },
      chartSeries: [],
    };
  },
  watch:{
    mapData(){
      const {data,geo}=this.mapData
      this.chartSeries=[ // 静态点样式
        {
          name: "销售额",
          type: "scatter",
          coordinateSystem: "bmap",
          data: converData(data,geo),
          // 鼠标移到点上面，出现的框框内的值
          // 表示取value中索引为2的值
          encode: {
            value: 2,
          },
          // 地图上点的颜色
          itemStyle: {
            color: "purple",
          },
          // 点的大小
          symbolSize: function (val) {
            return val[2] / 10;
          },
          // 图注数据
          label: {
            show: false,
            position: "right",
            formatter: function (v) {
              return `${v.data.name}-${v.data.value[2]}`;
            },
          },
          emphasis: {
            label: {
              show: true,
            },
          },
        },
        // 动态点样式
        {
          name: "Top 10",
          type: "effectScatter",
          coordinateSystem: "bmap",
          data: converData(
            data.sort(function (a, b) {
              return b.value - a.value;
            }),geo).slice(0, 10),
          symbolSize: function (val) {
            return val[2] / 10;
          },
          encode: {
            value: 2,
          },
          label: {
            formatter: function (v) {
              return `${v.data.name}-${v.data.value[2]}`;
            },
            position: "right",
            show: true,
          },
          hoverAnimation: true,
          // 动态点样式，颜色和发散方式
          rippleEffect: {
            brushType: "stroke",
          },
          itemStyle: {
            color: "purple",
            shadowBlur: 10,
            shadowColor: "#333",
          },
        },]
    }
  }
};
</script>