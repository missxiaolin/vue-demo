<template>
    <div id="container">
        wx测试
        <button @click="fa()">测试延迟</button>
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
</style>
