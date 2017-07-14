<template>
  <div class="container">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link :to="{ name: 'home'}" class="navbar-item">
          <i class="fa fa-thermometer-full fa-fw" aria-hidden="true"></i> LavaBoiler
        </router-link>

        <div class="navbar-burger burger" data-target="navMenuExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu is-box" :class="{ 'is-active': showNav }">
        <div class="navbar-end" v-if="!user.authenticated">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <router-link :to="{ name: 'register'}" class="navbar-item">Register</router-link>
              </p>
              <p class="control">
                <router-link :to="{ name: 'login'}" class="button is-primary">
                  <span class="icon">
                    <i class="fa fa-sign-in"></i>
                  </span>
                  <span>Login</span>
                </router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="navbar-end" v-if="user.authenticated">
          <router-link :to="{ name: 'users'}" class="navbar-item">Users</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              {{ user.data.name }}
            </a>
            <div class="navbar-dropdown ">
              <a class="navbar-item " href="#">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      showNav: false,
    };
  },
  // methods: {
  //   ...mapActions({
  //     logoutUser: 'auth/logoutUser'
  //   }),
  //   signout() {
  //     this.logoutUser().then(() => {
  //       this.$router.replace({
  //         name: 'home'
  //       });
  //     })
  //   }
  // },
  computed: {
    ...mapGetters({
      user: 'auth/user'
    }),
  }
}
</script>

<style lang="css">

</style>
