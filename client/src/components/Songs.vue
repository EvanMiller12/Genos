<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <div
          v-for="song in songs"
          :key="song.title">
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
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      songs: [
        {
          title: 'Float On',
          artist: 'Modest Mouse',
          album: 'Good News for People Who Love Bad'
        }
      ]
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
