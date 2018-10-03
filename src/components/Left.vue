<template>
  <el-aside :style="{ width: menuWidth}">
    <el-menu id="elMenu" :style="{ height: clientHeight + 'px' }" :default-openeds="['1', '3']" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="0">
        <template slot="title">
          <div style="font-size: 25px; color: #67c23a">
            <i v-if="isCollapse" style="font-size: 20px; color: #67c23a" v-bind:class="[menuIconClass]" @click="reverseMenu"></i>
            <span v-if="!isCollapse">{{ title }}</span>
          </div>
        </template>
      </el-submenu>
      <el-submenu v-for="menu in menus" :key="menu.index" :index="menu.index">
        <template slot="title">
          <i :class=menu.icon></i>
          <span style="color: orange;">{{menu.name}}</span>
        </template>
        <el-menu-item-group v-for="item in menu.itemGroups" :key="item.index">
          <router-link v-if="item.toPath != undefined" :to="item.toPath">
            <el-menu-item :index="item.index">
                <i :class=item.icon></i>
                <span style="color: white">{{item.name}}</span>
            </el-menu-item>
          </router-link>
        </el-menu-item-group>
        <el-submenu v-if="menu.subMenu != undefined" :index="menu.subMenu.index">
          <template slot="title">
            <i :class=menu.subMenu.icon></i>
            <span style="color: #009688">{{ menu.subMenu.name }}</span>
          </template>
          <el-menu-item v-for="menuItem in menu.subMenu.menuItems"
          :key="menuItem.index" :index="menuItem.index">
            <i :class="menuItem.icon"></i>
            <span style="color: #67c23a">{{ menuItem.name }}</span>
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      </el-menu>
  </el-aside>
</template>

<script>
export default {
  data () {
    return {
      title: 'ele-Admin',
      isCollapse: true,
      menuIconClass: 'el-icon-d-arrow-right',
      menuWidth: '300',
      menuData: []
    }
  },
  props: ['clientHeight'],
  methods: {
    reverseMenu () {
      if (this.isCollapse) {
        this.isCollapse = false
        this.menuIconClass = 'el-icon-d-arrow-left'
        this.menuWidth = document.getElementById('elMenu').style.width
      } else {
        this.isCollapse = true
        this.menuIconClass = 'el-icon-d-arrow-right'
        this.menuWidth = document.getElementById('elMenu').style.width
      }
    },

    handleOpen (key, keyPath) {
      if (key == 0) {//eslint-disable-line
        this.reverseMenu()
      }
    },

    handleClose (key, keyPath) {
      if (key == 0) {//eslint-disable-line
        this.reverseMenu()
      }
    }
  },

  created () {
    this.menus = [
      {
        'index': '1',
        'icon': 'el-icon-message',
        'name': '主页',
        'itemGroups': [
          {
            'index': '1-1',
            'name': '控制台',
            'toPath': 'control'
          },
          {
            'index': '1-2',
            'name': '主页一',
            'toPath': 'home'
          },
          {
            'index': '1-3',
            'name': '主页2',
            'toPath': 'controlPanel'
          }
        ],
        'subMenu': {
          'index': '1-4',
          'icon': 'el-icon-tickets',
          'name': '三级菜单测试',
          'menuItems': [
            {
              'index': '1-4-1',
              'name': '三级菜单一',
              'icon': 'el-icon-tickets',
              'toPath': 'el-icon-time'
            },
            {
              'index': '1-4-2',
              'name': '三级菜单二',
              'icon': 'el-icon-tickets',
              'toPath': 'el-icon-bell'
            },
            {
              'index': '1-4-3',
              'name': '三级菜单三',
              'icon': 'el-icon-tickets',
              'toPath': 'el-icon-mobile-phone'
            }
          ]
        }
      },
      {
        'index': '2',
        'icon': 'el-icon-menu',
        'name': '组件',
        'itemGroups': [
          {
            'index': '2-1',
            'name': '栅格',
            'icon': 'el-icon-circle-check'
          },
          {
            'index': '2-2',
            'name': '按钮',
            'toPath': 'controlPanel'
          },
          {
            'index': '2-3',
            'name': '表单',
            'toPath': 'controlPanel'
          }
        ],
        'subMenu': {
          'index': '2-4',
          'icon': 'el-icon-tickets',
          'name': '等比例列表排列',
          'menuItems': [
            {
              'index': '2-4-1',
              'name': '排列一',
              'icon': 'el-icon-tickets',
              'toPath': 'el-icon-time'
            },
            {
              'index': '2-4-2',
              'name': '排列二',
              'icon': 'el-icon-tickets',
              'toPath': 'el-icon-bell'
            },
            {
              'index': '2-4-3',
              'name': '排列三',
              'icon': 'el-icon-tickets',
              'toPath': 'el-icon-mobile-phone'
            }
          ]
        }
      },
      {
        'index': '3',
        'icon': 'el-icon-document',
        'name': '页面',
        'itemGroups': [
          {
            'index': '3-1',
            'name': '栅格',
            'toPath': 'controlPanel'
          },
          {
            'index': '3-2',
            'name': '按钮',
            'toPath': 'controlPanel'
          },
          {
            'index': '3-3',
            'name': '表单',
            'toPath': 'controlPanel'
          }
        ]
      }
    ]
  }
}
</script>

<style>
.el-menu {
  background-color: #20222A
}

a:-webkit-any-link {
  text-decoration: none;
}
</style>
