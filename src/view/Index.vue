<template>
  <div class="hello">
    <heador></heador>
    <PublicSlider></PublicSlider>
  </div>
</template>

<script>
import Heador from 'public/header'
import PublicSlider from './Slider/Slider'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    Heador,
    PublicSlider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
