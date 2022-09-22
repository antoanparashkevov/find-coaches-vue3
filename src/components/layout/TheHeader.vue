<template>
  <header>
    <nav>
      <h1>
        <router-link to='/'>Find A Coach</router-link>
      </h1>
      <ul>
        <li>
          <router-link to='/coaches'>All Coaches</router-link>
        </li>
        <li>
          <router-link v-if='isAuthenticated' to='/requests'>Requests</router-link>
        </li>
        <li>
          <router-link v-if='!isAuthenticated' to='/auth'>Login</router-link>
        </li>
        <li>
          <base-button v-if='isAuthenticated' @click='logout'>Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  computed:{
    isAuthenticated(){
      return this.$store.getters['auth/isAuthenticated']
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('auth/logout');
      this.$router.replace('/coaches');
    }
  }
};
</script>

<style scoped>
header {
  background-color: #3d008d;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  color: #f391e3;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  padding: 0.75rem 1.5rem;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: auto;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
