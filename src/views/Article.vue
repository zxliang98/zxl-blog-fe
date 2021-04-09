<template>
  <div class="article">artcle</div>
</template>

<script>
import { getArticleList } from "@/http/article";
export default {
  methods: {
    async getArticleList() {
      let list = await getArticleList({ catalog: 4 });
      console.log(list);
    }
  },
  created() {
    this.getArticleList();
  }
};
</script>

<style></style>
