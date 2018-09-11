<template>
    <div id="container">
        baidu
        <div id="allmap">

        </div>
        <remote-js :js-url="'http://api.map.baidu.com/getscript?v=2.0&ak=895OeoRGBBvHCbZT0kl6hdGn6MvREpbS&services=&t=20180823194355'" :js-load-call-back="loadRongJs"></remote-js>
    </div>
</template>

<script>

import remoteJs from 'core/remoteJs'

export default {
  name: 'bdMap2',
  components: {
    remoteJs
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  created: function () {
  },
  methods: {
    loadRongJs () {
      // eslint-disable-next-line
      var map = new BMap.Map('allmap') // 创建Map实例
      // eslint-disable-next-line
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
      // 添加地图类型控件
      // eslint-disable-next-line
      map.addControl(new BMap.MapTypeControl({
        mapTypes: [
          // eslint-disable-next-line
          BMAP_NORMAL_MAP,
          // eslint-disable-next-line
          BMAP_HYBRID_MAP
        ]}))
      map.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
    }
  }
}
</script>

<style>
#container {
    width:200px;
    height:200px;
}

#allmap{
  width: 300px;
  height: 300px;
}
</style>
