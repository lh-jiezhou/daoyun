<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http_egg.get('')
    }
  },
  // 进来组件时默认执行的操作
  created() {
    // 执行fetch
    console.log('-----------')
    this.fetch();
    console.log('------++-----'+this.$http_egg)
  }
}
</script>
