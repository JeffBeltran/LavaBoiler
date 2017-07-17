<template lang="html">
  <div class="section">
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-half-desktop is-offset-one-quarter-desktop">
          <div class="card">
            <div class="card-image">
              <section class="hero is-danger">
                <div class="hero-body">
                  <h1 class="title">
                    Forgot Password?
                  </h1>
                  <h2 class="subtitle">
                    Enter your email and we'll send you a password reset link
                  </h2>
                </div>
              </section>
            </div>
            <div class="card-content">
              <div class="content">
                <form class="control" @submit.prevent="submit">
                  <b-field label="Email"
                  :type="(errors.has('email') ? 'is-danger' : '')"
                  :message="errors.get('email')">
                  <b-input type="email" ref="start" size="is-medium" v-model="email"></b-input>
                </b-field>
                <div class="field">
                  <p class="control is-expanded">
                    <button class="button is-danger is-fullwidth is-medium">Send Password Reset Link</button>
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
      email: null,
      errors: new FormErrors(),
    }
  },
  methods: {
    ...mapActions({
      passwordEmail: 'auth/passwordEmail'
    }),
    submit() {
      this.passwordEmail({
        payload: {
          email: this.email
        },
        context: this
      }).then((test) => {
        if(!this.errors.any()){
              this.$router.replace({ name: 'login'});
              this.$toast.open({
                duration: 5000,
                message: `Password reset email was sent, please check your email`,
                position: 'is-top',
                type: 'is-success'
            })
              return
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
