<template lang="html">
  <div class="section">
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-half-desktop is-offset-one-quarter-desktop">
          <div class="card">
            <div class="card-image">
              <section class="hero is-primary">
                <div class="hero-body">
                  <div class="container">
                    <h1 class="title">
                      Register for the Site
                    </h1>
                    <h2 class="subtitle">
                      Create your user account for the site
                    </h2>
                  </div>
                </div>
              </section>
            </div>
            <div class="card-content">
              <div class="content">
                <form @submit.prevent="submit">
                  <b-field label="Name"
                  :type="(errors.has('name') ? 'is-danger' : '')"
                  :message="errors.get('name')">
                  <b-input v-model="name" ref="start"></b-input>
                </b-field>
                <b-field label="Email"
                :type="(errors.has('email') ? 'is-danger' : '')"
                :message="errors.get('email')">
                <b-input type="email" v-model="email"></b-input>
              </b-field>
              <b-field label="Password"
              :type="(errors.has('password') ? 'is-danger' : '')"
              :message="errors.get('password')">
              <b-input type="password" v-model="password"></b-input>
            </b-field>
            <b-field label="Confirm Password"
            :type="(errors.has('password') ? 'is-danger' : '')"
            :message="errors.get('password')">
            <b-input type="password" v-model="password_confirmation"></b-input>
          </b-field>
          <div class="field is-grouped">
            <p class="control">
              <button class="button is-primary">Submit</button>
            </p>
            <p class="control">
                <router-link :to="{ name: 'home'}" class="button is-link">Cancel</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import { FormErrors } from '../../../helpers/errors.js';

export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      errors: new FormErrors(),
    }
  },
  methods: {
    ...mapActions({
      register: 'auth/register'
    }),
    submit() {
      this.register({
        payload: {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        },
        context: this
      }).then(() => {
        if(!this.errors.any()){
          this.$router.replace({ name: 'home'});
        }
      })
    }
  },
  mounted(){
     this.$refs.start.focus();
 }
}
</script>

<style lang="css">
</style>
