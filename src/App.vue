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
  }
};
</script>

<style scoped>

</style>
