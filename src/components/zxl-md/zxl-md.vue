<template>
  <div class="zxl-md">
    <mavon-editor
      ref="md"
      v-model="content"
      :subfield="false"
      :editable="false"
      :toolbarsFlag="false"
      defaultOpen="preview"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    content: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.zxl-md {
  max-width: 1000px;
}
</style>
