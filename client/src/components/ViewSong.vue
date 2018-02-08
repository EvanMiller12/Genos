<template>
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
    this.song = await SongsService.showSong(songId)
  }
}
</script>

<style scoped>
</style>
