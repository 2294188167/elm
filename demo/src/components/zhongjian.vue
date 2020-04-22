<template>
  <div class="entries">
    <!-- <div class="shang">
        <div class="meis" v-for="item in entries" :key="item.id">
<img :src="item.image_hash | urlFormatter" alt="">
    </div>-->
    <el-row>
      <el-col :span="2">
        <template v-for="item in entries" >
          <div class="grid-content bg-purple" ></div>
          <img :src="item.image_hash | urlFormatter" alt />
          <span>{{item.name}}</span>
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "zhongjian",
  data() {
    return {
      entries: null
    };
  },

  component: {},
  mounted() {
    this.getentries();
  },
  methods: {
    getentries() {
      axios
        .get("http://localhost:3000/restapi/shopping/v2/entries")
        .then(res => {
          //  console.log(res.data[1].image_hash);
          console.log(res.data[0].entries);

          this.entries = res.data[0].entries;
        })
        .catch(error => {
          //  console.log(error,ssssss);
        });
    }
  },
  filters: {
    // 7d8a867c870b22bc74c87c348b75528djpeg
    // https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/
    urlFormatter(oldValue) {
      const first = "https://fuss10.elemecdn.com/";
      const second = oldValue.slice(0, 1);
      const third = oldValue.slice(1, 3);
      const forth = oldValue.slice(3);
      const fifth =
        ".jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/";
      return `${first}${second}/${third}/${forth}${fifth}`;
    }
  }
};
</script>

<style>
.entries {
  width: 90%;
  height: 120px;
  display: flex;
  flex-direction: row;
}
.meis img {
  width: 30px;
  height: 30px;
  border: 1px solid transparent;
  border-radius: 50%;
}
</style>