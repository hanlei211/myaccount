<template>
  <div class="sliderbar">
    <el-menu class="sliderbar-el-menu"
             :default-active="onRouters"
             :collapse="collapse"
             background-color="#324157"
             text-color="#bfcbd9"
             active-text-color="#20a0ff"
             unique-opened
             router>
      <template v-for="item in items">

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
      items: [
        {
          icon: 'el-icon-lx-home',
          index: 'first',
          title: '系统首页'
        },
        {
          icon: 'el-icon-lx-coin',
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
            subs: [
              {
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
          }]
        }, {
          icon: 'el-icon-pie-chart',
          index: 'charts',
          title: 'schart图表'
        },
        {
          icon: 'el-icon-rank',
          index: '6',
          title: '拖拽组件',
          subs: [
            {
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
          subs: [
            {
              index: 'permission',
              title: '权限测试'
            },
            {
              index: '404',
              title: '404页面'
            }
          ]
        }
        ,
      ]
    }
  },
}
</script>
<style  scoped>
</style>