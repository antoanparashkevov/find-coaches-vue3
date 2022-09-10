<template>
  <button v-if='!link' :class='mode'>
    <slot></slot>
  </button>
  <router-link :to='to' v-else :class='mode'>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    to: {
      type: String,
      required: true,
      default: '/'
    },
    //by default it should be button, not a router link
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    mode: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
button,a{
  text-decoration: none;
  padding: 0.75rem 1.75rem;
  font:inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color:white;
  cursor:pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}
button:active,
button:hover,
a:active,
a:hover{
  background-color: #270041;
  border-color: #270041;
}
.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>
