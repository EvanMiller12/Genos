<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
        TabTracker
      </span>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn>
        Browse
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark
          @click="navigateTo({name: 'Login'})">
          Login
        </v-btn>
 <!-- <router-link to="register"> looks through routes in router and links to it, wraps in a tag and messes up style -->
        <v-btn flat dark
          @click="navigateTo({name: 'Register'})"> <!-- looks for name: Register in router -->
          Sign Up
        </v-btn>
 <!-- </router-link> -->
    </v-toolbar-items>
  </v-toolbar>
</template>

<!-- controller -->
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route) // access router object and go to route
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    cursor: pointer;
  }

  .home:hover {
    color: pink;
  }
</style>
