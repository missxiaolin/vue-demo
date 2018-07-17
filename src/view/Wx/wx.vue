<template>
    <div id="container">
        wx测试
        <button @click="fa()">测试延迟</button>
        <input class="ceshi" type="text" value="测试" @click="fa()">
    </div>
</template>

<script>

export default {
  name: 'wx',
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
    fa () {
      alert(1)
    }
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
.ceshi{
    width: 200px;
    height: 300px;
}
</style>
