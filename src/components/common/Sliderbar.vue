<template>
  <div class="sliderbar">
    <el-menu class="sliderbar-el-menu"
             :default-active="onRouters"
             :collapse="collapse"
             background-color="#424f63"
             text-color="#fff"
             active-text-color="#65cea7"
             unique-opened
             router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index"
                      :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{item.title}}</span><i icon="el-icon-caret-bottom"></i>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs"
                          :index="subItem.index"
                          :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs"
                              :index="threeItem.index"
                              :key="i">{{threeItem.title}}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else
                            :index="subItem.index"
                            :key="subItem.index">{{ subItem.title}}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index"
                        :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{item.title}}</span></el-menu-item>

        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../common/Bus';
export default {
  data () {
    return {
      collapse: false,
      items: [{
        icon: 'el-icon-house',
        index: 'first',
        title: '系统首页'
      },
      {
        icon: 'el-icon-coin',
        index: 'salary',
        title: '资金管理'
      },
      {
        icon: 'el-icon-lx-calendar',
        index: '3',
        title: '表单相关',
        subs: [{
          index: 'form',
          title: '基本表格'
        }, {
          index: '3-2',
          title: '三级菜单',
          subs: [{
            index: 'editor',
            title: '富文本编辑器'
          },
          {
            index: 'markdown',
            title: 'markdown编辑器'
          },
          ]
        },
        {
          index: 'upload',
          title: '文件上传'
        }
        ]
      }, {
        icon: 'el-icon-pie-chart',
        index: 'charts',
        title: 'schart图表'
      },
      {
        icon: 'el-icon-rank',
        index: '6',
        title: '拖拽组件',
        subs: [{
          index: 'drag',
          title: '拖拽列表',
        },
        {
          index: 'dialog',
          title: '拖拽弹框',
        }
        ]
      },
      {
        icon: 'el-icon-lx-global',
        index: 'i18n',
        title: '国际化功能'
      },
      {
        icon: 'el-icon-lx-warn',
        index: '7',
        title: '错误处理',
        subs: [{
          index: 'permission',
          title: '权限测试'
        },
        {
          index: '404',
          title: '404页面'
        }
        ]
      }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '');
    }
  },
}
</script>

<style scoped>
.sidebar {
  display: block;
  left: 0;
  width: 100px;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}

.sidebar > ul {
  height: 100%;
}
</style>
