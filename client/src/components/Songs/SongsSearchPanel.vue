<template>
  <panel title="search">
    <v-text-field
      label="Search by song title, artist, album, or genre"
      v-model="search"
    ></v-text-field>
  </panel>
</template>

<!-- controller -->
<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  // watch as search changes, place search val in query of url
  watch: {
    search (value) {
      const route = {
        name: 'songs'
      }
      // update url query with typed info
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route) // go to route
    },
    // watch search query string, update search val and query simulatenously
    '$route.query.search': {
      immediate: true, // call handler when search val is undefined
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
