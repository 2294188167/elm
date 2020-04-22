<template>
<div id="app">
<div class="block">
    
    <el-carousel height="100px" >
      <el-carousel-item v-for="item in banners" :key="item.id" >
      <img :src="item.image_hash | urlFormatter" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
   name:"lb",
   data(){
     return {
 banners:[],
     }
   },
  
   component:{
       

   },
   mounted(){
       this.getshuju()
   },
   methods:{
       getshuju(){
           axios.get('http://localhost:3000/restapi/shopping/v2/banners').then((res)=>{
              //  console.log(res.data[1].image_hash);
              // console.log(res);
              
              this.banners = res.data
           })
           .catch((error)=>{
            //  console.log(error,ssssss);
             
           })
       }
   },
     filters:{
        // 7d8a867c870b22bc74c87c348b75528djpeg
        // https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/
        urlFormatter(oldValue){
            const first = "https://fuss10.elemecdn.com/";
            const second = oldValue.slice(0,1);
            const third = oldValue.slice(1,3);
            const forth = oldValue.slice(3);
            const fifth = ".jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/";
            return `${first}${second}/${third}/${forth}${fifth}`;
        }
    }
   
}
  

</script>

<style>
.block{
    margin:5px;
    margin-top:60px ;

   
}
.block img{
  height: 100px;
  width: 100%;
}

  .el-carousel__item:nth-child(n) {
   /* background-image: url("../assets/images/1.jpg" ); */
   background-size: 100%;
   background-repeat: no-repeat;
    
  }
  
  .el-carousel__item:nth-child(2n) {
     /* background-image: url("../assets/images/2.jpg" ); */
       background-size: 100%;
   background-repeat: no-repeat;
  }
    .el-carousel__item:nth-child(3n) {
     /* background-image: url("../assets/images/3.jpg" ); */
       background-size: 100%;
   background-repeat: no-repeat;
  }
   .el-carousel__item:nth-child(4n) {
     /* background-image: url("../assets/images/3.jpg" ); */
       background-size: 100%;
   background-repeat: no-repeat;
  }
</style>