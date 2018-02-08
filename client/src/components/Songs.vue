<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
       <!-- router link messed w/ styling so added navto method -->
       <!--  <router-link
          slot="action"
          :to="{name: 'song-create'}"> -->
          <v-btn
            slot="action"
            @click="navigateTo({name: 'songs-create'})"
            class="cyan accent-2"
            light
            medium
            absolute
            right
            middle
            fab>
            <v-icon>add</v-icon>
          </v-btn>
        <!-- </router-link> -->
        <div
          class="song"
          v-for="song in songs"
          :key="song.id">
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
                @click="navigateTo({
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                })">
                View
              </v-btn>
            </v-flex>

            <v-flex xs-6>
              <img :src="song.albumImageUrl" :alt="song.title" class="albume-image">
            </v-flex>
          </v-layout>
          {{song.title}}
          {{song.artist}}
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<!-- controller -->
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.getSongs()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
