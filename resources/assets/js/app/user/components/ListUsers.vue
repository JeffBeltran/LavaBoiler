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
      <b-table
      :data=users
      :striped="true"
      :paginated="true"
      :per-page="10">

      <template scope="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>
          {{ props.row.id }}
        </b-table-column>

        <b-table-column field="name" label="Name" sortable>
          {{ props.row.name }}
        </b-table-column>

        <b-table-column field="email" label="Email" sortable>
          {{ props.row.email }}
        </b-table-column>

        <b-table-column field="created_at" label="Signed Up" sortable>
          <span class="tag is-success">
            {{ new Date(props.row.created_at).toLocaleDateString() }}
          </span>
        </b-table-column>
    </template>

    <div slot="empty" class="has-text-centered">
      This table is empty!
    </div>
  </b-table>
</section>
</div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
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
