<template>
  <panel title="Bookmarks">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          {{props.item.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
// import {mapState} from 'vuex'
// import BookmarksService from '@/services/BookmarksService'
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
      bookmarks: [
        {
          title: 'test data title',
          artist: 'Testing'
        },
        {
          title: 'test data title2',
          artist: 'Testing2'
        }
      ]
    }
  }
//   computed: {
//     ...mapState([
//       'isUserLoggedIn',
//       'user'
//     ])
//   },
//   async mounted () {
//     if (this.isUserLoggedIn) {
//       this.bookmarks = (await BookmarksService.index()).data
//     }
//   }
}
</script>

<style>
</style>
