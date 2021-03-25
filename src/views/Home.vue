<template>
  <div class="home">
    <el-container>
      <el-aside :width="`${asideWidth}px`">
        <el-input placeholder="输入关键词" v-model="filterText"></el-input>
        <el-tree
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
          <el-collapse v-model="activeName" @change="handleNodeClick" accordion>
            <el-collapse-item
              v-for="item in data"
              :key="item.id"
              :title="item.label"
              :name="item.id"
            >
              <div>
                {{ item.des }}
              </div>
              <el-link v-for="i in item.children" :key="i.id">{{
                i.label
              }}</el-link>
            </el-collapse-item>
          </el-collapse>
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
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                  children: [
                    {
                      id: 11,
                      label: "四级 1-1-1-1"
                    }
                  ]
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      isCollapse: false,
      asideWidth: 250,
      laseAsideWidth: 0
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
