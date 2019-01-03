<template>
<div style="height:100vh">
  <scroll ref="scroll"
          :data="aa"
          :scrollbar="scrollbarObj"
          :pullDownRefresh="pullDownRefreshObj"
          :pullUpLoad="pullUpLoadObj"
          :startY="parseInt(startY)"
          @pullingDown="onPullingDown"
          @pullingUp="onPullingUp"
          :probeType="3"
          :listenScroll="true"
          @scroll="scrollParams"
          >
    <div>
      <ul v-for="i in 10" :key="i">
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
      <ul v-for="item in aa" :key="item">
        <li>{{ item }}</li>
      </ul>
    </div>
  </scroll>
</div>
</template>

<script>
  import Scroll from "./scroll";
  export default {
    components: {
      Scroll
    },
    watch: {
      scrollbarObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      pullDownRefreshObj: {
        handler(val) {
          const scroll = this.$refs.scroll.scroll
          if (val) {
            scroll.openPullDown()
          } else {
            scroll.closePullDown()
          }
        },
        deep: true
      },
      pullUpLoadObj: {
        handler(val) {
          const scroll = this.$refs.scroll.scroll
          if (val) {
            scroll.openPullUp()
          } else {
            scroll.closePullUp()
          }
        },
        deep: true
      },
      startY() {
        this.rebuildScroll()
      }
    },
    computed: {
      scrollbarObj: function () {
        return this.scrollbar ? {fade: this.scrollbarFade} : false
      },
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop)
        } : false
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
      },
    },
    data () {
      return {
        scrollbar: true,
        scrollbarFade: true,
        pullDownRefresh: true,
        pullDownRefreshThreshold: 90,
        pullDownRefreshStop: 40,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: '',
        pullUpLoadNoMoreTxt: '',
        startY: 0,
        scrollToX: 0,
        scrollToY: -200,
        scrollToTime: 700,
        scrollToEasing: 'bounce',
        scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce'],
        items: [],
        itemIndex: 0,
        aa:['vcsxavdsa','fdsa','vcxzvx','asdfdsa','bxczbz','fdsafdsa']
      }
    },
    methods: {
      onPullingDown() {
        // 模拟更新数据
        console.log('pulling down and load data')
        setTimeout(() => {
          // if (Math.random() > 0.5) {
          //   // 如果有新数据
          //   console.log('上拉刷新')
          //   // this.items.unshift('我是新数据:' + +new Date())
          // } else {
          //   // 如果没有新数据
          //   this.$refs.scroll.forceUpdate()
          // }
          this.aa.unshift(Math.random().toString())
          this.$refs.scroll.forceUpdate()
        }, 1500)
      },
      onPullingUp() {
        // 更新数据
        console.log('pulling up and load data')
        setTimeout(() => {
          // if (Math.random() > 0.5) {
          //   // 如果有新数据
          //   console.log('下拉刷新')
          // } else {
          //   // 如果没有新数据
          //   this.$refs.scroll.forceUpdate()
          // }
          this.aa.push(Math.random().toString())
          this.$refs.scroll.forceUpdate()
        }, 1500)
      },
      rebuildScroll() {
        Vue.nextTick(() => {
          this.$refs.scroll.destroy()
          this.$refs.scroll.initScroll()
        })
      },
      scrollParams(pos) {
        this.scrollY = pos.y
      }
    },
    mounted () {
      this.$refs.scroll.refresh()
    }
  }
</script>