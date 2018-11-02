<template>
    <div class="waifu">
        <div class="waifu-tips"></div>
        <canvas id="live2d" width="280" height="250" class="live2d"></canvas>
    </div>
</template>

<script>
export default {
  name: 'live2d',
  data () {
    return {
    }
  },
  mounted () {
    loadlive2d('live2d', 'path/to/model.json')
  }
}
</script>
