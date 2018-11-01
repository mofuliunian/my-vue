<template>
    <div class="dashboard" ref="dashboard">
        <div class="picBox" :style="`width: 100%; height: ${clientHeight}px`">
            <div class="mark"></div>
        </div>
        <div class="helloBox" :style="`height: ${clientHeight}px`">
            <h3 ref="h3Title"></h3>
            <div class="aWorld">
                <div class="triangle"></div>
                <div class="hitokoto">
                    <i class="iconfont icon-yinhao"></i>
                    <span>When you look long into an abyss, the abyss looks into you</span>
                    <i class="iconfont icon-yinhao-copy-copy"></i>
                </div>
            </div>
        </div>
        <div class="content">
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'dashboard',
  data () {
    return {
      clientHeight: 0,
      helloText: '',
      hitokoto: ''
    }
  },
  mounted () {
    this.clientHeight = document.body.clientHeight
    setTimeout(() => {
      // console.log(this.$refs.dashboard.offsetHeight, this.$refs.dashboard.scrollHeight)
      this.changeClientHeight({
        payload: {
          clientHeight: this.$refs.dashboard.offsetHeight
        }
      })
    }, 200)
    if (document.referrer !== '') {
      let referrer = document.createElement('a')
      referrer.href = document.referrer
      this.helloText = 'Hello! 来自 <span style="color:#0099cc;">' + referrer.hostname + '</span> 的朋友!'
      let domain = referrer.hostname.split('.')[1]
      if (domain === 'baidu') {
        this.helloText = 'Hello! 来自 百度搜索 的朋友!<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&wd=')[1].split('&')[0] + '</span> 找到的我吗？'
      } else if (domain === 'so') {
        this.helloText = 'Hello! 来自 360搜索 的朋友!<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&q=')[1].split('&')[0] + '</span> 找到的我吗？'
      } else if (domain === 'google') {
        this.helloText = 'Hello! 来自 谷歌搜索 的朋友!<br>欢迎阅读<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>'
      }
    }
    this.$refs.h3Title.innerHTML = this.helloText
  },
  methods: {
    ...mapActions(['changeClientHeight'])
  }
}
</script>

<style scoped  lang="scss">
    .dashboard {
        width: 100%;
        height: 100%;
        overflow: auto;
        position: relative;
    }
    .picBox {
        background: url('../assets/1.png') no-repeat 50%;
        background-size: cover;
        position: fixed;
    }
    .mark{
        width: 100%;
        height: 100%;
        background-image: url('data:image/gif;base64,R0lGODlhAgACAIABAAAAAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjJDQjM0NzIzRUU4MTFFNzkyMzhGQjE2OTBBM0I3MDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjJDQjM0NzMzRUU4MTFFNzkyMzhGQjE2OTBBM0I3MDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMkNCMzQ3MDNFRTgxMUU3OTIzOEZCMTY5MEEzQjcwMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMkNCMzQ3MTNFRTgxMUU3OTIzOEZCMTY5MEEzQjcwMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAEALAAAAAACAAIAAAICRF4AOw==');
        position: absolute;
    }
    .content{
        background: #fff;
        height: 1800px;
        position: relative;
        z-index: 666;
    }
    .helloBox{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h3{
            font-size: 36px;
            color: #fff;
        }
        .aWorld{
            width: 640px;
            background: rgba(0, 0, 0, .5);
            height: 120px;
            border-radius: 30px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 24px;
            position: relative;
            .triangle{
                position: absolute;
                width: 0;
                height: 0;
                border: 18px solid transparent;
                border-bottom-color: rgba(0,0,0,.5);
                top: -36px;
                left: 80px;
            }
            .hitokoto{
                color: #efefef;
                font-size: 18px;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: center;
                span{
                    display: inline-block;
                    padding: 0 9px;
                }
            }
        }
    }
</style>
