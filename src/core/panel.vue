<template>
    <section :class="[panelClass,cname]">
        <h4 v-if="title">-{{ title }}-</h4>
        <slot></slot>
    </section>
</template>

<script>
export default {
  name: 'panel',
  props: {
    // class
    cname: {
      type: String,
      default: ''
    },
    // 标题
    title: {
      type: String,
      title: ''
    }
  },
  data () {
    return {
      panelClass: 'panel'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "css/element.scss";
.panel {
  @include panel;
}
</style>
