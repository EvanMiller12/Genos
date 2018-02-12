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
import {mapState} from 'vuex'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    // router is synced to store in main.js, so updates songId by route from song navTo method
    const songId = this.route.params.songId
    this.song = (await SongsService.showSong(songId)).data

    if (this.isUserLoggedIn) {
      SongHistoryService.postSongs({
        songId: songId,
        userId: this.user.id
      })
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
</style>
