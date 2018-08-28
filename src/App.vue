<template>
  <div id="app">
    <view-box ref="ViewBox">
      <x-header slot="header" class="header">
        <div slot="overwrite-left">直播</div>
        <div>网易</div>
        <div slot="right">搜索</div>
      </x-header>
      <router-view/>
      <tabbar slot="bottom">
        <tabbar-item>
          <icon type="download" slot="icon"></icon>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
          <icon type="warn" slot="icon"></icon>
          <span slot="label">热点</span>
        </tabbar-item>
        <tabbar-item>
          <icon type="success" slot="icon"></icon>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box> 
    
  </div>
</template>

<script>
import { ViewBox,XHeader, Tabbar, TabbarItem,Icon } from 'vux'
export default {
  name: 'App',
  components:{
    ViewBox,
    XHeader,
    Tabbar, 
    TabbarItem,
    Icon
  },
  mounted(){
    this.$store.dispatch('getLists');
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html,body{
  height:100%;
  width:100%;
  overflow-x:hidden;
}
#app{
  .header{
    position:absolute;
    top:0;
    left:0;
    z-index:9;
    width:100%;
  }
  .weui-media-box__title{
    white-space:normal;
    font-weight: 400;
    font-size: 17px;
    width: auto;
    overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
  }

  .weui-media-box__bd{
    height:78px;
  }
}
.hello{
  height:100%;
}
#app{
  height:100%;
}
#app .weui-media-box__hd, .weui-media-box__hd img{
  width:102px;
  height:78px;
}
</style>
