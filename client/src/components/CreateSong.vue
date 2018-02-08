<template>
  <v-layout>
    <v-flex xs4 >
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          v-model="title"
        ></v-text-field>
        <v-text-field
          label="Artist"
          v-model="artist"
        ></v-text-field>
        <v-text-field
          label="Genre"
          v-model="genre"
        ></v-text-field>
        <v-text-field
          label="Album"
          v-model="album"
        ></v-text-field>
        <v-text-field
          label="Album Image Url"
          v-model="albumImageUrl"
        ></v-text-field>
        <v-text-field
          label="Youtube Id"
          v-model="youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field
          label="Lyrics"
          multi-line
          v-model="lyrics"
        ></v-text-field>
        <v-text-field
          label="Tab"
          multi-line
          v-model="tab"
        ></v-text-field>
      </panel>
      <v-btn
        dark
        class="cyan"
        @click="create">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }
  },
  methods: {
    create () {
      // Call Api
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
