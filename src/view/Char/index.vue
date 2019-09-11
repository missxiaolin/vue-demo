<template>
  <div id="app">
    <div class="sidebar"></div>
    <div class="main">
      <Send />
    </div>
  </div>
</template>

<script>
import Send from "public/char/send";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    Send
  }
};
</script>

<style scoped lang="scss">
#app {
  margin: 20px auto;
  width: 800px;
  height: 600px;

  overflow: hidden;
  border-radius: 3px;

  .sidebar,
  .main {
    height: 100%;
  }
  .sidebar {
    float: left;
    width: 200px;
    color: #f4f4f4;
    background-color: #2e3238;
  }
  .main {
    position: relative;
    overflow: hidden;
    background-color: #eee;
  }
  .text {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .message {
    height: "calc(100% - 160px)";
  }
}
</style>
