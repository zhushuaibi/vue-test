<template>
  <div class="tabbar_part" @click="itemClick">
    <div v-show="!isActive"><slot name="icon"></slot></div>
    <div v-show="isActive"><slot name="icon-active"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle(){
      return this.isActive?'color: red':''
    }
  },
  methods: {
    itemClick(){
      if(!this.isActive){
        this.$router.push(this.link)
      }
    }
  }
}
</script>

<style scoped>
  .tabbar_part{
    flex: 1;
  }
  .tabbar_part img{
    width: 24px;
    height: 24px;
  }
  .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
</style>
