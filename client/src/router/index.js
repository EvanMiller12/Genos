import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import SongsContainer from '@/components/Songs/SongsContainer'
import CreateSong from '@/components/CreateSong'
import EditSong from '@/components/EditSong'
import SongContainer from '@/components/ViewSong/SongContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: SongsContainer
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: SongContainer
    },
    {
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: EditSong
    },
    {
      path: '*', // if hit a path that dont exist, redirect to songs
      redirect: 'songs'
    }
  ]
})
