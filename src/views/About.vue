<template>
  <div class="about">
    <h1>This is an about page</h1>
    <mavon-editor
      v-model="value"
      codeStyle="vs2015"
      @change="change"
      @save="save"/>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    change (val) {
      // console.log(val)
      // console.log(this.value)
    },
    save (val, value) {
      console.log(val)
      console.log(value)
    }
  },
  components: {
  }
}
</script>
