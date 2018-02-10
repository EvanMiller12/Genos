<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>

        <v-btn
          dark
          class="cyan"
          :to="{
            name: 'song-edit',
            params () { // method to return obj and update songId dynamically
              return {
                songId: song.id
              }
            }
          }">
          Edit
        </v-btn>
        <!-- only show btn if user is logged in -->
        <v-btn
          v-if="isUserLoggedIn && !isBookmarked"
          dark
          class="cyan"
          @click="bookmark">
          Bookmark
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && isBookmarked"
          dark
          class="cyan"
          @click="unbookmark">
          Unbookmark
        </v-btn>

      </v-flex>

      <v-flex xs6>
        <img :src="song.albumImageUrl" :alt="song.title" class="album-image">
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      isBookmarked: false
    }
  },
  // grabs state from store so can just use name instead of $store.state.isUserLoggedIn
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    // if user not logged in, dont try to find book mark b/c userId is undefined
    if (!this.isUserLoggedIn) {
      return
    }

    try {
      const bookmark = (await BookmarksService.getBookmarks({
        songId: this.song.id,
        userId: this.$store.state.user.id
      })).data
      // if bookmark is defined set as true else false
      this.isBookmarked = !!bookmark
      console.log('bookmark', this.isBookmarked)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async bookmark () {
      try {
        await BookmarksService.postBookmark({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
      } catch (err) {
        console.log(err)
      }
    },
    async unbookmark () {
      try {
        await BookmarksService.deleteBookmark({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }

  .song-title {
    font-size: 30px;
  }

  .song-artist {
    font-size: 24px;
  }

  .song-genre {
    font-size: 18px;
  }

  .album-image {
    width: 70%;
    margin: 0 auto;
  }
</style>
