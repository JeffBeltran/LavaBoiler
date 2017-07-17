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
                <form class="control" @submit.prevent="submit">
                  <b-field label="Email"
                  :type="(errors.has('email') ? 'is-danger' : '')"
                  :message="errors.get('email')">
                  <b-input type="email" ref="start" v-model="email" autofocus></b-input>
                </b-field>
                <b-field label="Password"
                :type="(errors.has('password') ? 'is-danger' : '')"
                :message="errors.get('password')">
                <b-input type="password" v-model="password" password-reveal></b-input>
              </b-field>
              <div class="columns is-mobile">
                <div class="column is-4">
                  <div class="field is-grouped">
                    <p class="control">
                      <button class="button is-primary">Submit</button>
                    </p>
                    <p class="control">
                      <router-link :to="{ name: 'home'}" class="button is-link">Cancel</router-link>
                    </p>
                  </div>
                </div>
                <div class="column">
                  <div class="field is-pulled-right">
                    <p class="control is-expanded">
                      <router-link :to="{ name: 'passwordemail'}" class="button is-link">Forgot your Password?</router-link>
                    </p>
                  </div>
                </div>
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
        if(!this.errors.any()){
          localforage.getItem('intended').then((name) => {
            if (_.isEmpty(name)) {
              this.$router.replace({ name: 'home'});
              return
            }
            this.$router.replace({ name: name});
          })
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
