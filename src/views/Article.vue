<template>
  <div class="article">
    <div v-if="!articleList.length" class="nodata">当前目录下没有文章</div>
    <div v-else class="list">
      <div v-for="item in articleList" :key="item.id" class="item">
        <el-card shadow="hover">
          {{ item.title }}
          <el-button @click="handleDetail(item.id)" type="text">查看</el-button>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleList } from "@/http/article";
export default {
  data() {
    return {
      articleId: 0,
      articleList: []
    };
  },
  watch: {
    "$route.params.id": {
      handler(n) {
        this.articleId = n;
        this.getArticleList(this.articleId);
      },
      immediate: true
    }
  },
  methods: {
    async getArticleList(id) {
      let { data } = await getArticleList({ catalog: id });
      this.articleList = data;
      console.log(this.articleList);
    },
    handleDetail(id) {
      this.$router.push({
        name: "Detail",
        params: { id }
      });
      console.log(id);
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.article {
  ::v-deep .el-card {
    margin-bottom: 20px;
    .el-card__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
