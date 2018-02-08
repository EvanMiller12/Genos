<template>
  <panel  title="Tabs">
    <textarea
      readonly
      v-model="song.tab"
    ></textarea>
  </panel>
</template>

<script>
// import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
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
