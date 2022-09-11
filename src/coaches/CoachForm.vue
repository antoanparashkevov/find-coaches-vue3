<template>
  <form @submit.prevent='setData'>

    <div class='form-control'>
      <label for='firstName'>Firstname</label>
      <input type='text' id='firstName' v-model.trim='firstName'>
    </div>
    <div class='form-control'>
      <label for='lastName'>Lastname</label>
      <input type='text' id='lastName' v-model.trim='lastName'>
    </div>
    <div class='form-control'>
      <label for='description'>Description</label>
      <textarea id='description' rows='5' v-model.trim='description'></textarea>
    </div>
    <div class='form-control'>
      <label for='rate'>Hourly rate</label>
      <input type='number' id='rate' v-model.number='rate'>
    </div>
    <div class='form-control'>
      <h3>Areas of Expertise</h3>
      <div>
        <input type='checkbox' id='frontend' value='frontend' v-model='areas'>
        <label for='frontend'>Frontend Engineer</label>
      </div>
      <div>
        <input type='checkbox' id='backend' value='backend' v-model='areas'>
        <label for='backend'>Backend Engineer</label>
      </div>
      <div>
        <input type='checkbox' id='career' value='career' v-model='areas'>
        <label for='career'>Career</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  name: 'CoachForm',
  data() {
    return {
      firstName: '',
      lastName: '',
      areas: [],
      description: '',
      rate: null
    };
  },
  methods: {
    setData() {
      const getFormData = {
        first: this.firstName,
        last:this.lastName,
        desc:this.description,
        rate:this.rate,
        areas:this.areas,
      }
      // console.log(getFormData)
      this.$emit('save-data',getFormData)
    }
  }
};
</script>

<style scoped>
.form-control{
  margin:0.5rem 0;
}
label{
  font-weight: bold;
  display:block;
  margin-bottom:0.5rem;
}
input[type='checkbox'] + label{
  font-weight: normal;
  display:inline;
}
input,textarea{
  display:block;
  width: 100%;
  border:1px solid #ccc;
  font:inherit;
}
input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox']{
  display:inline;
  border:none;
  width: auto;
}
input[type='checkbox']:focus{
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

/*for validation*/
.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
