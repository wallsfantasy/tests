<template>
    <div>
    <b-button type="reset" variant="success" v-on:click="onAdd">Add Customer</b-button>
    <CustomerForm v-for="(form, index) in forms" :key="index" @ok="showModal"/>
    <b-modal id="modal-1" title="Result" ok-only ok-title="close" v-on:hide="onReset">
      {{ form }}
    </b-modal>
    </div>
</template>

<script>

import CustomerForm from './CustomerForm.vue'

export default {
  name: 'CustomerPage',
    components: {
    CustomerForm
  },
  props: {
  },
  data() {
      return {
        form: {},
        forms: [],
      }
    },
    methods: {
      onAdd(evt) {
        evt.preventDefault()
        this.forms.push({})
      },
      showModal(form) {
        this.form = form;
        this.$bvModal.show('modal-1')
      },
      onReset() {
          this.forms = [];
          this.form = {};
      },
    }
}
</script>
