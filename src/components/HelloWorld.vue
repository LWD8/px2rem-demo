<template>
  <div class="hello">
    <div class="top_box">
      <div class="text_item">印象金币</div>
      <div class="text_item">印象股</div>
    </div>
    <ul>
      <li v-for="i in 10" :key="i" :style="{width: `${i}rem`, backgroundColor: 'red',height:'30px'}"></li>
    </ul>
    <p class="aa">迪迪迪迪</p>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <x-button type="primary" link="/demo">Go to demo list</x-button>
      <x-button type="default" link="BACK">Back</x-button>

    <swiper :aspect-ratio="300/800" loop auto dots-position="center">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in imgList" :key="index">
        <img :src="item">
      </swiper-item>
    </swiper>
    <div style="height:100px;"></div>
  </div>
</template>

<script>
import { XButton, Swiper, SwiperItem } from 'vux'
export default {
  name: 'HelloWorld',
  components: {
    XButton,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgList: [
        'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
        'https://static.vux.li/demo/5.jpg'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
//px转换rem
.top_box{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 106px;
  line-height: 106px;
  .text_item{
    flex:1;
    text-align: center;
    font-size: 32px;
  }
}
.aa{
  font-size: 90px;
}
.swiper-demo-img img {
  width: 100%;
}
</style>
