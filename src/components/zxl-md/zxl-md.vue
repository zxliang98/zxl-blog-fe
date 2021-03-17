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
    return {
      content: "dfshak"
    };
  }
};
</script>

<style></style>
