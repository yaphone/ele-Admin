<template>
  <div>
    <el-button>测试按钮</el-button>
  </div>
</template>

<style></style>
<script>
export default {
  name: 'page1',
  data () {
    return {
      msg: '这是Home'
    }
  },
  props: ['message']
}
</script>
