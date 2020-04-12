<template>
  <div class="about">
    <h1>{{id ? '编辑': '新建'}}分类</h1>
    <!-- vue缩写 @ 即为 v-on:绑定事件；: 即为 v-bind:绑定属性 -->
    <!-- prevent阻止默认提交,不用跳转页面 -->
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <!-- v-model双向绑定 -->
        <el-input v-model="model.name" ></el-input>
      </el-form-item>
      <el-form-item label>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  //接收路由中带的参数, 可在此页面直接使用 {{id}}
  props: {
    id: {}
  },
  data() {
    // 给定对象用以能绑定数据
    return {
      model: {}
    };
  },
  methods: {
    // 请求接口，提交数据，axios(在main.js中引用)
    async save() {
      let res;
      // 根据是否有id判断是修改还是新建操作
      if (this.id) {
        // this.$http 中地址 为http://localhost:3000/admin/api
        // await 把异步回调函数的写法换成类似同步形式写法
        res = await this.$http.put(`categories/${this.id}`, this.model);
      } else {
        res = await this.$http.post("categories", this.model);
      }
      // 页面跳转
      this.$router.push("/categories/list");
      // elementUi提供的方法
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`categories/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    // 进来此模块即执行 先判断是否有id
    this.id && this.fetch();
  }
};
</script>
