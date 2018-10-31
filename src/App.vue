<template>
  <div id="app">
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
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {}
  },
  mounted () {
    loadlive2d('live2d', 'path/to/model.json')
    axios.post('/api/my').then(res => {
      console.log(res)
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

/*定义滚动条轨道 内阴影+圆角*/
/*::-webkit-scrollbar-track*/
/*{*/
  /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
  /*border-radius: 3px;*/
  /*background-color: #F5F5F5;*/
/*}*/

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
  border-radius: 6px;
  background: rgba(58,58,58,.6);
}
</style>
