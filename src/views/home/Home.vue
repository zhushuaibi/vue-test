<template>
  <div>
    <div>HOME</div>
    <div>{{ count }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data: function (){
      return {

      }
    },
    computed: {
      count(){
        //return this.$store.state.test.count
        return this.$store.getters.getCount
      }
    },
    methods: {
      increment(){
        this.$store.commit('increment')
      },
      decrement(){
        this.$store.commit('decrement')
      }
    }
  }
</script>

<style scoped>

</style>
