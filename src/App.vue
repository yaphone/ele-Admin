<template>
  <div>
    <el-container v-bind:style="{ height: clientHeight + 'px'}">
        <!-- 左侧菜单 -->
        <Left :clientHeight="clientHeight"></Left>

        <el-container>
          <!-- 顶部菜单 -->
          <Header></Header>
          <!-- 内容容器 -->
          <el-main>
            <router-view></router-view>
          </el-main>

          <el-footer style="text-align: right">
            <span>© ele-Admin Powered by <a href="https://github.com/yaphone" target="_blank">yaphone</a></span>
          </el-footer>
        </el-container>

      </el-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Left from './components/Left.vue'
import Home from './components/Home.vue'

export default {
  components: {
    Left,
    Header,
    Home
  },
  data () {
    return {
      clientHeight: 1000
    }
  },
  mounted () {
    const that = this
    that.clientHeight = window.innerHeight
    window.onresize = () => {
      return (() => {
        that.clientHeight = window.innerHeight
      })()
    }
  }
}
</script>

<style>

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-footer {
  background-color: #c0c4cc;
  line-height: 60px;
}

</style>
