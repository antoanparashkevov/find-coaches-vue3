<template>
  <form @submit.prevent='submitForm'>
    <div :class="[{invalid:email.isValid === false},'form-control']">
      <label for='email'>E-mail</label>
      <input type='email' id='email' v-model.trim='email.val' @blur="clearInvalidClass('email')">
    </div>
    <div :class="[{invalid:message.isValid === false},'form-control']">
      <label for='message'>Message</label>
      <textarea id='message' rows='5' v-model.trim='message.val' @blur="clearInvalidClass('message')"></textarea>
    </div>
    <p class='errors' v-if='!formIsValid'>Please enter a valid email and non-empty message!</p>
    <div class='actions'>
      <base-button>Send a message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactCoach',
  data() {
    return {
      message: {
        val: '',
        isValid: true
      },
      email: {
        val: '',
        isValid: true
      },
      formIsValid: true
    };
  },
  methods: {
    clearInvalidClass(input) {
      this[input].isValid = true;
    },
    validateForm() {
      if (this.email.val === '' || this.email.val.includes('@') === false) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.message.val === '') {
        this.message.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (this.formIsValid === false) {
        return;
      }
      const formData = {
        coachId: this.$route.params.id,
        email: this.email.val,
        message: this.message.val
      };
      this.$store.dispatch('requests/addRequest', formData);
      this.$router.replace('/coaches');
      console.log(formData);
      console.log(this.$store.getters['requests/requests'])
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input, textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.actions {
  text-align: center;
}

/*validity...*/
.errors {
  font-weight: bold;
  color: red;
}

div.invalid label[for='email'], div.invalid label[for='message'] {
  color: red;
  font-weight: bold;
}

div.invalid textarea, div.invalid input {
  border: 2px solid red;
}
</style>
