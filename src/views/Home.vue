<template>
  <div class="home" ref="home">
    <div class="fs" ref="fs">
      <div class="fsn"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
  },
  mounted () {
    this.clientHeight = document.body.clientHeight
    setTimeout(() => {
      // console.log(this.$refs.dashboard.offsetHeight, this.$refs.dashboard.scrollHeight)
      this.changeClientHeight({
        payload: {
          clientHeight: this.$refs.home.offsetHeight
        }
      })
    }, 200)
  },
  methods: {
    ...mapActions(['changeClientHeight'])
  }
}
</script>

<style>
  .fs{
    width: 300px;
    height: 3000px;
    border: 1px solid #ccc;
    overflow: auto;
  }
</style>
