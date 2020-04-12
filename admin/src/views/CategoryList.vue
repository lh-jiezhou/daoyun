<template>
  <div class="about">
    <h1>分类列表</h1>
    <!-- v-bind:data="items" data属性绑定变量items(script中)-->
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <!--  @click="$router.push()跳转页面 -->
          <el-button
            type="text"
            size="small"
            @click="$router.push('/categories/edit/'+scope.row._id)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表格中的items数组变量
      items: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("categories");
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`是否确定删除分类? "${row.name}" `, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          // 删除成功
          const res = await this.$http.delete(`categories/${row._id}`)
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          // 成功后重新获取数据
          this.fetch()
        })
        .catch(() => { //删除掉就会打印Uncaught (in promise) cancel
        })
    }
  },
  // 进来组件时默认执行的操作
  created() {
    // 执行fetch
    this.fetch();
  }
};
</script>