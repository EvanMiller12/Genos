<template>
  <panel title="Recently Viewed Songs">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="histories">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          <v-btn
            class="title-link"
            flat
            small
            :to="{
              name: 'song',
              params: {
                songId: props.item.id
              }
            }"
          >{{props.item.title}}</v-btn>
        </td>
        <td class="text-xs-right">
          {{props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'

export default {
  data () {
    return {
      // headers- array of the text- data for column and value- key referenced from bookmark array
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      // sort bookmorks by date created
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      histories: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    // if user is logged in, make request to backend for all users bookmarks
    if (this.isUserLoggedIn) {
      this.histories = (await SongHistoryService.getSongs()).data
    }
  }
}
</script>

<style scoped>
  .title-link {
    padding: 0;
    margin-right: 0;
  }
</style>
