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
                      Login to Site
                    </h1>
                    <h2 class="subtitle">
                      Enter your email and password to login
                    </h2>
                  </div>
                </div>
              </section>
            </div>
            <div class="card-content">
              <div class="content">
                <form @submit.prevent="submit">
                  <b-field label="Email"
                  :type="(errors.has('email') ? 'is-danger' : '')"
                  :message="errors.get('email')">
                    <b-input type="email"  v-model="email"></b-input>
                  </b-field>
                  <b-field label="Password"
                  :type="(errors.has('password') ? 'is-danger' : '')"
                  :message="errors.get('password')">
                    <b-input type="password" v-model="password"></b-input>
                  </b-field>
                  <div class="field is-grouped">
                    <p class="control">
                      <button class="button is-primary">Submit</button>
                    </p>
                    <p class="control">
                      <button class="button is-link">Cancel</button>
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
import localforage from 'localforage';

export default {
  data() {
    return {
      email: null,
      password: null,
      errors: new FormErrors(),
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    submit() {
      this.login({
        payload: {
          email: this.email,
          password: this.password,
        },
        context: this
      }).then((test) => {
        localforage.getItem('intended').then((name) => {
          if (_.isEmpty(name)) {
            this.$router.replace({ name: 'home'});
            return
          }
          this.$router.replace({ name: name});
        })
      })
    }
  }
}
</script>

<style lang="css">
</style>
