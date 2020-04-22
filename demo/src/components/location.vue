<template>
  <div class="weizhi">
      <a href=""><img src="../assets/images/位置.png">软件谷科创城
      <img src="../assets/images/下拉.png"></a>
      </div>
</template>

<script>
import axios from 'axios'
export default {
   name:"location",
   data(){
     return {
 location:[],
     }
   },
  
   component:{
       

   },
   mounted(){
       this.getloaction()
   },
   methods:{
       getloaction(){
           axios.get('http://localhost:3000/restapi/member/v2/users/14547420/location').then((res)=>{
              //  console.log(res.data[1].image_hash);
            //   console.log(res.data.addresses);
              
              this.loaction= res.data
           })
           .catch((error)=>{
            //  console.log(error,ssssss);
             
           })
       }
   },
     
   
}
</script>

<style>
.weizhi{
  width: 200px;
  float: left;
  
}
.weizhi::after{
  content: '';
  display: block;
  visibility: hidden;
  clear: both;
}
.weizhi img{
    width: 20px;
    height: 20px;
}
</style>