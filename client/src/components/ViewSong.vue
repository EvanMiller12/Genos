<template>
  <div>
    <v-layout>
      <!-- left col -->
      <v-flex xs6>
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
            </v-flex>

            <v-flex xs6>
              <img :src="song.albumImageUrl" :alt="song.title" class="album-image">
              <br>
              {{song.album}}
            </v-flex>
          </v-layout>
        </panel>
      </v-flex>
      <!-- end left col -->

      <!-- right col -->
      <v-flex xs6>
        <panel title="Youtube Video" class="ml-2">
          <!-- youtube embed -->
        </panel>
      </v-flex>
      <!-- end right col -->
    </v-layout>

    <v-layout>
      <v-flex xs6 class="ml-2">
        <panel  title="Lyrics">
          <textarea
            readonly
            v-model="song.lyrics"
          ></textarea>
        </panel>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <panel  title="Tabs">
          <textarea
            readonly
            v-model="song.tab"
          ></textarea>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    // router is synced to store in main.js, so updates songId by route from song navTo method
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.showSong(songId)).data
  },
  components: {
    Panel
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

  textarea {
    font-family: monospace;
    width: 100%;
    height: 600px;
    border: none;
    border-style: none;
    border-color: transparent;
    overflow: auto; /* scrollbar */
    padding: 40px;
  }
</style>
