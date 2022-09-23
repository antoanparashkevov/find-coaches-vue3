<template>
<section>
  <the-header></the-header>
</section>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader';
export default {
  name: 'App',
  components:{
    TheHeader
  },
  created() {
    this.$store.dispatch('auth/autoLogin');
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

*{
  box-sizing: border-box;
}

html{
  font-family: "Roboto", sans-serif;
}

body{
  margin:0;
}

</style>
