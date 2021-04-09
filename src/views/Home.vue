<template>
  <div class="home">
    <el-container>
      <el-aside :width="`${asideWidth}px`">
        <el-input placeholder="输入关键词" v-model="filterText"></el-input>
        <div class="welcome" @click="handleNodeClick(0)">welcome</div>
        <el-tree
          :key="elTreeKey"
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          :filter-node-method="filterNode"
          highlight-current
          @node-click="handleNodeClick"
          ref="tree"
        >
        </el-tree>
      </el-aside>
      <el-container>
        <div class="ctrl-line" v-show="!isCollapse">
          <i class="el-icon-s-promotion"></i>
        </div>
        <el-header height="52px">
          <i
            @click="collapseIt"
            :class="
              isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'
            "
          ></i>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { getCatalog } from "@/http/catalog";
export default {
  data() {
    return {
      activeName: "1",
      filterText: "",
      data: [],
      defaultProps: {
        children: "children",
        label: "label"
      },
      isCollapse: false,
      asideWidth: 250,
      laseAsideWidth: 0,
      elTreeKey: 0
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleNodeClick(data) {
      console.log(data);
      let id = data.id ? data.id : 0;
      if (this.currentId === id) return;
      this.currentId = id;
      if (id) {
        this.$router.push({ name: "Article", params: { id } });
      } else {
        this.elTreeKey = Date.now();
        this.$router.push({ name: "Welcome" });
      }
      console.log(this.$route);
    },
    collapseIt() {
      this.isCollapse = !this.isCollapse;
      this.asideWidth && (this.laseAsideWidth = this.asideWidth);
      this.asideWidth = this.isCollapse ? 0 : this.laseAsideWidth;
    },
    getCatalog() {
      getCatalog().then(res => {
        console.log(res);
        this.data = res.data;
      });
    }
  },
  created() {
    this.getCatalog();
  }
};
</script>

<style lang="scss" scoped>
@import "./Home";
</style>
