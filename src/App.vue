<template>
  <div id="app">
    <router-view />
    <div class="bot">
      <el-link href="https://beian.miit.gov.cn/" target="_blank"
        >豫ICP备20011447号-1</el-link
      >
    </div>
  </div>
</template>

<style lang="scss">
#app {
  .bot {
    width: 100%;
    height: 20px;
    // background-color: #fff;
    text-align: center;

    position: fixed;
    bottom: 0;
  }
}
</style>
