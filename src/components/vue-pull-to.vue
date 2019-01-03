<template>
  <div>
    <pull-to :bottom-load-method="refresh" :bottom-config="BOTTOM_DEFAULT_CONFIG">
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
      <ul v-for="item in aa" :key="item">
        <li>{{ item }}</li>
      </ul>
    </pull-to>
  </div>
</template>

<script>
  import PullTo from 'vue-pull-to'
  export default {
    components: {
      PullTo
    },
    data () {
      return {
        aa: 20,
        BOTTOM_DEFAULT_CONFIG: {
          pullText: '上拉加载',
          triggerText: '释放更新',
          loadingText: '加载中...',
          doneText: '加载完成',
          failText: '加载失败',
          loadedStayTime: 400,
          stayDistance: 50,
          triggerDistance: 70
        }
      }
    },
    methods: {
      refresh(loaded) {
        console.log(1111)
        this.aa+=20
        loaded('done')
      }
    }
  }
</script>

<style scoped>

</style>