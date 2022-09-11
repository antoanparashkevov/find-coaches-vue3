<template>
  <base-card>
    <h2>Find you coach</h2>
    <span class='filter-option'>
    <input type='checkbox' id='frontend' checked @change='setFilter'>
      <label for='frontend'>Frontend</label>
    </span>
    <span class='filter-option'>
    <input type='checkbox' id='backend' checked @change='setFilter'>
      <label for='backend'>Backend</label>
    </span>
    <span class='filter-option'>
    <input type='checkbox' id='career' checked @change='setFilter'>
      <label for='career'>Career</label>
    </span>
  </base-card>
</template>


<!--the change event fires when a input element of type checkbox is checked or unchecked.-->
<script>
export default {
  name: 'FilterCoach',
  data(){
    return {
    filters:{
      frontend:true,
      backend:true,
      career:true
    }
    }
  },
  methods:{
    setFilter(event){
      const inputId = event.target.id;
      const isChecked = event.target.checked;

      //we copy filters object, then we overwrite the property which changes his value.
      const updatedFilters = {
        ...this.filters,
        [inputId]: isChecked
      }
      this.filters = updatedFilters
      this.$emit('change-areas', updatedFilters)
    }
  }
};
</script>

<style scoped>
h2{
  margin: 0.5rem 0;
}
.filter-option{
  margin:1rem;
}
label,input{
  vertical-align: middle;
}
.filter-option label{
  margin-left: 0.25rem;
}
</style>
