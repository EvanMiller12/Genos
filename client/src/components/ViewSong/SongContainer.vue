<template>
  <div>
    <v-layout>
      <!-- left col -->
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <!-- end left col -->

      <!-- right col -->
      <v-flex xs6>
        <you-tube :youtubeId="song.youtubeId" />
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
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'

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
    Panel,
    SongMetadata,
    YouTube
  }
}
</script>

<style scoped>
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
