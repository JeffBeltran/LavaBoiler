<template lang="html">
  <div class="container">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Site Users
          </h1>
          <h2 class="subtitle">
            Listing all users for the site
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
        <div class="box" v-for="user in users">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{user.name}}</strong> <small>{{user.email}}</small> <small></small>
                  <br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                </p>
              </div>
            </div>
          </article>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: null,
    }
  },
  mounted() {
    axios.get('/api/users').then((response) => {
      this.users = response.data.data;
    }).catch((error) => {
      // user doesn't have valid token...
    })
  },
  methods: {

  },
}
</script>

<style lang="css">
</style>
