<template>
    <div id="container">
    </div>
</template>

<script>
import { TMap } from 'js/qqMap'

export default {
  name: 'qqMap',
  data () {
    return {
    }
  },
  mounted () {
    TMap('MU2BZ-I6H3G-IUQQ2-IN5WW-6KR4S-BNBUV').then(qq => {
      // eslint-disable-next-line
      var qq_map = new qq.maps.Map(document.getElementById('container'), {
        // 地图的中心地理坐标。
        center: new qq.maps.LatLng(39.916527, 116.397128),
        zoom: 8
      })
    })
  },
  methods: {
  },
  created: function () {
  }
}
</script>

<style>
#container {
    width:200px;
    height:200px;
}
</style>
