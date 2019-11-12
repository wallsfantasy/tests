<template>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="email-input"
      >
        <b-form-input
          id="email-input"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Name:" label-for="name-input">
        <b-form-input
          id="name-input"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Favourite Juices:">
        <b-form-checkbox-group v-model="form.juices" id="juice-checkboxes">
          <b-form-checkbox v-for="(juice, index) in juices" :key="index" :value="juice"> {{ juice }}</b-form-checkbox>
            <b-form-invalid-feedback :state="isJuiceEroor">Please select at least one</b-form-invalid-feedback>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Save</b-button>
    </b-form>
</template>

<script>
export default {
  name: 'CustomerForm',
  props: {
  },
  data() {
      return {
        form: {
          email: '',
          name: '',
          juices: []
        },
        isSubmit: false,
        juices: ['Apple Juice', 'Orange Juice', 'Watermelon Juice'],
      }
    },
    computed: {
      isJuiceEroor() {
        return this.isSubmit ? this.form.juices.length >= 1 : null;
      }
    },
    methods: {
      onSubmit(evt) {
          evt.preventDefault()
          this.isSubmit = true;
          if(this.form.juices.length <= 0 ){
              return;
          }
        
        this.$emit('ok', this.form);
      },
    }
}
</script>
