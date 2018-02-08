<template>
  <div class="hello">
    <heador></heador>
    <PublicSlider></PublicSlider>
    <Novice></Novice>
  </div>
</template>

<script>
import Heador from 'public/header'
import PublicSlider from './Slider'
import Novice from './Novice'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    Heador,
    PublicSlider,
    Novice
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
