<template>
  <div class="about" ref="about">
    <h1>This is an about page</h1>
    <mavon-editor
      v-model="value"
      codeStyle="vs2015"
      @change="change"
      @save="save"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'about',
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    this.clientHeight = document.body.clientHeight
    setTimeout(() => {
      // console.log(this.$refs.dashboard.offsetHeight, this.$refs.dashboard.scrollHeight)
      this.changeClientHeight({
        payload: {
          clientHeight: this.$refs.about.offsetHeight
        }
      })
    }, 200)
  },
  methods: {
    ...mapActions(['changeClientHeight']),
    change (val) {
      // console.log(val)
      // console.log(this.value)
    },
    save (val, value) {
      console.log(val)
      console.log(value)
    }
  }
}
</script>
