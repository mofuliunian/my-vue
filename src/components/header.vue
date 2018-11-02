<template>
    <header :class="scrollTop === 0 ? '' : 'header-no-top'">
        <div class="header-left">
            logo
        </div>
        <ul class="header-right">
            <li class="">
                <router-link to="/">
                    <i class="iconfont icon-shouye"></i>
                    <span>Home</span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="iconfont icon-boke"></i>
                    <span>Blog</span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="iconfont icon-archive"></i>
                    <span>Archive</span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="iconfont icon-yinle"></i>
                    <span>Music</span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="iconfont icon-APP"></i>
                    <span>Apps</span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="iconfont icon-gerenjianli"></i>
                    <span>CV</span>
                </router-link>
            </li>
            <li class="search">
                <i class="iconfont icon-sousuo1"></i>
            </li>
        </ul>
    </header>
</template>

<script>
// import axios from 'axios'
import '../../public/font/iconfont.css'
export default {
  name: 'headers',
  data () {
    return {
    }
  },
  props: ['scrollTop']
}
</script>

<style lang="scss">
    header{
        height: 65px;
        position: fixed;
        width: 100%;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        box-sizing: border-box;
        .header-left{
        }
        .header-right{
            font: .8rem Ubuntu,sans-serif;
            list-style: none;
            display: flex;
            align-items: center;
            li{
                padding: 0 12px;
                a{
                    text-decoration: none;
                    color: #666;
                    font-size: 16px;
                    .iconfont{
                        display: inline-block;
                        padding-right: 6px;
                    }
                }
            }
            .search .iconfont{
                font-size: 22px;
                color: #666;
                cursor: pointer;
            }
        }
    }
    header:hover, .header-no-top{
        background: hsla(0,0%,100%,.95);
        transition: all .4s ease;
        box-shadow: 0 1px 40px -8px rgba(0,0,0,.5);
    }
</style>
