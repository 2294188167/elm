<template>
  <div class="view">
    <div class="tou">
    <location></location>
      <div class="saoma">
       <a href=""><img src="../assets/images/扫码.png"></a>
     
      <a href=""><img src="../assets/images/消息.png"></a>
      </div>
      </div>
      <div class="ss">
       <div class="s">
         <img src="../assets/images/搜索.png" alt="">老乡鸡
       </div>
      </div>
  </div>
</template>

<script>
import location from '../components/location'
export default {
  name:"Page-header",
  components:{
    location,
  }

}
</script>

<style scoped>
.view{
  height:50px;
  margin:5px;
}
.tou{
  line-height: 50px;
 
}

.view img{
  width: 20px;
  height: 20px;
}

.shaoma{
  width: 60px;
  /* display: inline-block; */
  float:right;
  
}
.saoma::after{
  content: '';
  display: block;
  visibility: hidden;
  clear: both;
}

.ss{
  width: 270px;
  height: 30px;
  border-radius: 20px;
  font-size: 12px;
  color: rgb(107, 104, 104);
  line-height: 30px;
  background-color: rgb(201, 194, 194);
  text-align: center;
  border: 1px solid rgb(107, 104, 104);
  margin-top: 20px;
}
.ss img{
  height: 12px;
  width: 12px;
}


</style>

