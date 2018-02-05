<template>
  <div :class="$style.header">
      <span :class="$style.left">
          <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
      </span>
      <btn :class="$style.btnDownload">App下载</btn>
  </div>
</template>

<script>
import btn from '../core/btn'
export default {
  name: 'header',
  data () {
    return {
    }
  },
  components: {
    btn
  }
}
</script>

<style scoped lang="scss" module>
.header{
    color: #666;
    height: 100px;
    line-height: 100px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    font-size: 32px;
    background-color: #ffffff;
    z-index: 100;
    .left{
        font-size: 28px;
        height: 30px;
        line-height: 30px;
        margin: 17px 0 0 18px;
    }
    .btnDownload{
        float: right;
        font-size: 24px;
        border-width: 0;
        height: 56px;
        line-height: 56px;
        min-width: 120px;
        padding: 0;
        border-radius: 4px;
        margin: 28px 24px 0 0;
    }
}
</style>
