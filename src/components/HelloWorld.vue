<template>
  <div class="hello">
    <panel :list="list"></panel>
  </div>
</template>

<script>
import { Panel } from 'vux'
export default {
  name: 'HelloWorld',
  components:{
    Panel
  },
  data () {
    return {
    }
  },
  computed:{
    list(){
      console.log('this.$store',this)
      return this.$store.getters.list
    }
  }
}
</script>

<style lang="less">
.hello{margin-top:46px;}
</style>
