<template>
  <div class="app-init page-home-main">
    <div class="block-item block-top">
      <div class="logo fl">
        Movie Admin
      </div>

      <div class="right-menu fr">
        <el-dropdown class="drop-millent">
          <span class="el-dropdown-link">
            root<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="block-item block-left scroll-box">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        :router="true"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-star-on"></i>
            <span>电影管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="movie-up">上架影视</el-menu-item>
            <el-menu-item index="movie-management">管理影视</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">分类管理</span>
        </el-menu-item>

        <el-menu-item index="3">
          <i class="el-icon-info"></i>
          <span slot="title">广告管理</span>
        </el-menu-item>

        <el-menu-item index="4">
          <i class="el-icon-warning"></i>
          <span slot="title">版权声明</span>
        </el-menu-item>

        <el-menu-item index="5">
          <i class="el-icon-share"></i>
          <span slot="title">SEO管理</span>
        </el-menu-item>


        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-view"></i>
            <span>数据统计</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">访问统计</el-menu-item>
            <el-menu-item index="6-2">搜索统计</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">首页管理</span>
        </el-menu-item>

      </el-menu>


    </div>
    <div class="block-item block-right">
      <router-view/>
    </div>
    <div class="block-item block-bottom">
      github@jon-millent
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style type="text/sass" lang="sass">
  @import "../../assets/sass/util"
  .page-home-main
    .block-item
      position: absolute
    .block-top
      height: 61px
      top: 0
      left: 0
      width: 100%
      line-height: 50px
      border-bottom: 1px solid #EEE
      background-color: #fff
      @include box-sizing
      padding: 4px 18px
      .logo
        font-size: 26px
        color: #666
      .drop-millent
        .el-dropdown-link
          cursor: pointer
    .block-left
      top: 61px
      left: 0
      bottom: 0px
      width: 200px
      background-color: #fff
      border-right: 1px solid #E6E6E6
      .el-menu
        border: none
    .block-right
      right: 0
      top: 61px
      left: 201px
      bottom: 21px
      background-color: #fff
      border-bottom: 1px solid #eee
      @include box-sizing
      padding: 10px
      .el-menu
        border-right: none
    .block-bottom
      bottom: 0
      left: 201px
      width: 100%
      height: 20px
      background-color: #fff
      font-size: 12px
      line-height: 20px
      text-indent: 20px
</style>
