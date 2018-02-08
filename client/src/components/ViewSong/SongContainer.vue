<template>
  <div>
    <v-layout>
      <!-- left col -->
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <!-- end left col -->

      <!-- right col -->
      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
      <!-- end right col -->
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :song="song" /> <!-- bind prop song -->
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'

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
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
</style>
