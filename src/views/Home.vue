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
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>
                与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
              </div>
              <div>
                在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
              </div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>
                控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
              </div>
              <div>
                页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
              </div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>
                清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
              </div>
              <div>
                帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
              </div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>
                用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
              </div>
              <div>
                结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Home";
</style>
