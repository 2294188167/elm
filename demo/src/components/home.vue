<template>
<div id="app">
 <PageHeader></PageHeader>
 <lb></lb>
  <zhongjian></zhongjian>
 </div>
 
</template>
 
<script>
import zhongjian from '../components/zhongjian'
 import lb from '../components/lb'
  import PageHeader from '../components/Page-header'
export default {
  name:'home',
  components:{
    PageHeader,
    lb,
    zhongjian
    
  },

}
</script>
 
<style>
 lb{
     margin-top:10px;
      border: 1px solid transparent;
    border-radius: 10px;
 }
 PageHeader{
     margin-top:10px;
 }
</style>

