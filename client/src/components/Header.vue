<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'songs'
        }">
        TabTracker
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
       <v-btn
        flat
        dark
        :to="{
          name: 'songs'
        }">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-menu offset-y>
        <v-btn
          v-if="$store.state.isUserLoggedIn"
          @click="showBookmarks()"
          flat dark slot="activator">
          Bookmarks
        </v-btn>
        <v-list>
          <v-list-tile v-for="bookmark in bookmarks" :key="bookmark.id">
            <v-btn flat :to="{
              name: 'song',
              params: {
                songId: bookmark.SongId
              }
            }">
            <v-list-tile-title>
              {{ bookmark.title }}
            </v-list-tile-title>
            </v-btn>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
          name: 'register'
        }"> <!-- looks for name: Register in router -->
        Sign Up
      </v-btn>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<!-- controller -->
<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  data () {
    return {
      bookmarks: null
    }
  },
  async mounted () {
    // if user is logged in, make request to backend for all users bookmarks
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.getBookmarks()).data
    }
  },
  methods: {
    async showBookmarks () {
      this.bookmarks = (await BookmarksService.getBookmarks()).data
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
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
