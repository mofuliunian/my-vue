<template>
  <div class="home">
    <div class="fs" ref="fs">
      <div class="fsn"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    handleScroll (e) {
      console.log(e)
    }
  },
  mounted () {
    this.$refs.fs.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
  .fs{
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    overflow: auto;
  }
  .fsn{
    height: 600px;
  }
</style>
