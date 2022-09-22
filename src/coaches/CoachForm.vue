<template>
  <form @submit.prevent='setData'>

    <div class='form-control' :class='{invalid:!firstName.isValid}'>
      <label for='firstName'>Firstname</label>
      <input type='text' id='firstName' v-model.trim='firstName.val' @blur='clearValidity("firstName")'>
      <p v-if='!firstName.isValid'>Firstname must not be empty!</p>
    </div>
    <div class='form-control' :class='{invalid:!lastName.isValid}'>
      <label for='lastName'>Lastname</label>
      <input type='text' id='lastName' v-model.trim='lastName.val' @blur='clearValidity("lastName")'>
      <p v-if='!lastName.isValid'>Lastname must not be empty!</p>
    </div>
    <div class='form-control' :class='{invalid:!description.isValid}'>
      <label for='description'>Description</label>
      <textarea id='description' rows='5' v-model.trim='description.val' @blur='clearValidity("description")'></textarea>
      <p v-if='!description.isValid'>Description must not be empty!</p>
    </div>
    <div class='form-control' :class='{invalid:!rate.isValid}'>
      <label for='rate'>Hourly rate</label>
      <input type='number' id='rate' v-model.number='rate.val' @blur='clearValidity("rate")'>
      <p v-if='!rate.isValid'>Rate must not be empty!</p>
    </div>
    <div class='form-control' :class='{invalid:!areas.isValid}'>
      <h3>Areas of Expertise</h3>
      <div>
        <input type='checkbox' id='frontend' value='frontend' v-model='areas.val' @blur='clearValidity("areas")'>
        <label for='frontend'>Frontend Engineer</label>
      </div>
      <div>
        <input type='checkbox' id='backend' value='backend' v-model='areas.val' @blur='clearValidity("areas")'>
        <label for='backend'>Backend Engineer</label>
      </div>
      <div>
        <input type='checkbox' id='career' value='career' v-model='areas.val' @blur='clearValidity("areas")'>
        <label for='career'>Career</label>
      </div>
      <p v-if='!areas.isValid'>Click at least one area of expertise!</p>
    </div>
    <p v-if='!formIsValid' style='color:red;font-weight: bold;'>Please fix the issues above and submit the form again!</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  name: 'CoachForm',
  data() {
    return {
      firstName: {
        val:'',
        isValid:true
      },
      lastName: {
        val:'',
        isValid:true
      },
      areas: {
        val:[],
        isValid:true
      },
      description: {
        val:'',
        isValid:true
      },
      rate: {
        val:null,
        isValid:true
      },
      formIsValid:true
    };
  },
  methods: {
    clearValidity(input){
      if(this[input].val!=='' && typeof this[input].val === 'string'){
        this[input].isValid = true;
      }else if(typeof this[input].val === 'number' && this[input].val !== null){
        this[input].isValid = true;
      }
    },
    validateForm(){
      if(this.firstName.val === ''){
        this.firstName.isValid = false;
        this.formIsValid = false;
      } if(this.lastName.val === ''){
        this.lastName.isValid = false;
        this.formIsValid = false;
      } if(this.description.val === ''){
        this.description.isValid = false;
        this.formIsValid = false;
      } if(!this.rate.val || this.rate.val < 0){
        this.rate.isValid = false;
        this.formIsValid = false;
      } if(this.areas.val.length === 0){
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    setData() {
      this.formIsValid = true;
      this.validateForm();

      if(this.formIsValid === false){
        return;
      }
      const getFormData = {
        first: this.firstName.val,
        last:this.lastName.val,
        desc:this.description.val,
        rate:this.rate.val,
        areas:this.areas.val,
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
