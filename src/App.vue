<template>
<section>
  <the-header></the-header>
</section>
  <section>
    <router-view v-slot='slotProps'>
<!--      mode=out-in -> so first to animate the removal then the newly added route-->
      <transition name='route' mode='out-in'>
<!--        slotProps.Component will point at the component the router wants to load-->
        <component :is='slotProps.Component'></component>
      </transition>
    </router-view>
  </section>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader';
export default {
  name: 'App',
  components:{
    TheHeader
  },
  computed:{
    didAutoLogout(){
      return this.$store.getters['auth/didAutoLogout'];
    }
  },
  created() {
    this.$store.dispatch('auth/autoLogin');
  },
  watch:{
    didAutoLogout(currValue, oldValue){
      if(currValue === true && currValue !== oldValue){
        this.$router.replace('/coaches');
      }
    }
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

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-leave-from,
.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}

</style>
