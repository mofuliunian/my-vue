<template>
  <div id="app" ref="app">
    <div class="scroll-progress" :style="`width: ${scrollProgressWidth}`"></div>
    <!--<div class="fs" ref="fs">-->
      <!--<div class="fsn"></div>-->
    <!--</div>-->
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <router-view/>
    <div class="waifu">
      <div class="waifu-tips"></div>
      <canvas id="live2d" width="280" height="250" class="live2d"></canvas>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      boxHeight: 0,
      scrollTop: 0,
      browserHeight: document.body.clientHeight,
      scrollProgressWidth: '0%'
    }
  },
  computed: {
    ...mapState({
      clientHeight: state => state.app.clientHeight
    })
  },
  watch: {
    clientHeight: function (val) {
      this.boxHeight = val
    }
  },
  mounted () {
    // loadlive2d('live2d', 'path/to/model.json')
    window.addEventListener('scroll', (e) => {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollProgressWidth = this.scrollTop / (this.boxHeight - this.browserHeight) * 100 + '%'
      if (this.scrollTop === 0) {
        this.scrollProgressWidth = '0%'
      }
    })
  }
}
</script>

<style lang="scss">
html,body{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  cursor: url("./assets/cursor.png"), auto;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
  width: 6px;
  height: 16px;
  background-color: #F5F5F5;
}

.scroll-progress {
  height: 3px;
  width: 0;
  background: orange;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
  border-radius: 6px;
  background: rgba(58,58,58,.6);
}
</style>
