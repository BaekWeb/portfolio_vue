<template>
  <div class="home">
    <Header/>
    <Visual/>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Visual from "@/components/visual.vue";

export default {
  name: 'Home',
  components: {
    Header,
    Visual
  }
}
</script>

<style>
</style>
