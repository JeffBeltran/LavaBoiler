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
                <b-input type="hidden" v-model="token" disabled></b-input>
                <b-field label="Email"
                :type="(errors.has('email') ? 'is-danger' : '')"
                :message="errors.get('email')">
                <b-input type="email" v-model="email" ref="start"></b-input>
              </b-field>
              <b-field label="New Password"
              :type="(errors.has('password') ? 'is-danger' : '')"
              :message="errors.get('password')">
              <b-input type="password" v-model="password"></b-input>
            </b-field>
            <b-field label="Confirm New Password"
            :type="(errors.has('password') ? 'is-danger' : '')"
            :message="errors.get('password')">
            <b-input type="password" v-model="password_confirmation"></b-input>
          </b-field>
          <div class="field is-grouped">
            <p class="control">
              <button class="button is-primary">Reset Password</button>
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
      token: this.$route.params.token,
      email: null,
      password: null,
      password_confirmation: null,
      errors: new FormErrors(),
    }
  },
  methods: {
    ...mapActions({
      passwordReset: 'auth/passwordReset'
    }),
    submit() {
      this.passwordReset({
        payload: {
          token: this.token,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        },
        context: this
      }).then(() => {
        if(!this.errors.any()){
          this.$router.replace({ name: 'login'});
          this.$toast.open({
            duration: 5000,
            message: `Password reset was successful, please login with your new password`,
            position: 'is-top',
            type: 'is-success'
          })
          return
        }
        if(this.errors.has('token')){
          this.$router.replace({ name: 'login'});
          this.$dialog.alert({
                title: this.errors.get('token'),
                message: "The password reset token was invalid. This \
                means your password was not changed. Please check that you clicked \
                on your newest email. If you are not sure, select the \
                <code>Forgot Your Password</code> link and resend it again.",
                type: 'is-danger'
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
