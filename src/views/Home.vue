<template>
  <div class="home">
    <Header/>
    <Visual/>
    <About/>
    <Skill/>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Visual from "@/components/visual.vue";
import About from "@/components/about.vue";
import Skill from "@/components/skill.vue";

export default {
  name: 'Home',
  components: {
    Header,
    Visual,
    About,
    Skill
  }
}
</script>

<style>
</style>
