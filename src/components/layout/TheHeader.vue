<template>
<header>
<nav>
  <h1><router-link to='/'>Find A Coach</router-link></h1>
  <ul><li><router-link to='/coaches'>Coaches</router-link></li></ul>
  <ul><li><router-link to='/requests'>Requests</router-link></li></ul>
</nav>
</header>
</template>

<script>
export default {
  name: 'TheHeader'
};
</script>

<style scoped>

</style>
