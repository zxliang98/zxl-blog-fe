<template>
  <div class="detail">
    <zxl-md :content="content"></zxl-md>
  </div>
</template>

<script>
import zxlMd from "@/components/zxl-md/zxl-md";
import { getArticle } from "@/http/article";
export default {
  data() {
    return {
      content: ""
    };
  },
  components: {
    zxlMd
  },
  methods: {
    async getDetail(id) {
      let { data } = await getArticle({ id });
      console.log(data);
      this.content = data.content;
    }
  },
  created() {
    this.getDetail(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
.detail {
  .zxl-md {
    margin: 0 auto;
  }
}
</style>
