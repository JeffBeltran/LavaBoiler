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
                <b-field label="Name">
                  <b-input :value="name"></b-input>
                </b-field>
                <b-field label="Email">
                  <b-input type="email" :value="email"></b-input>
                </b-field>
                <b-field label="Password">
                  <b-input type="password" :value="password"></b-input>
                </b-field>
                <b-field label="Confirm Password">
                  <b-input type="password" :value="password_confirmation"></b-input>
                </b-field>
                <div class="field is-grouped">
                  <p class="control">
                    <button class="button is-primary">Submit</button>
                  </p>
                  <p class="control">
                    <button class="button is-link">Cancel</button>
                  </p>
                </div>
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

export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      errors: [],
    }
  },
  // methods: {
  //   ...mapActions({
  //     register: 'auth/register'
  //
  //   }),
  //   submit() {
  //     this.register({
  //       payload: {
  //         name: this.name,
  //         email: this.email,
  //         password: this.password,
  //         password_confirmation: this.password_confirmation
  //       },
  //       context: this
  //     }).then(() => {
  //       this.$router.replace({ name: 'home'});
  //     })
  //   }
  // }
}
</script>

<style lang="css">
</style>
