<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action" />
    </v-toolbar>

    <div class="pl-4 pr-4 pt-2 pb-2">
      <!-- slot places whatever you wrap panel with into slot, like props.children -->
      <!-- if panel is a single closed tag, content in slot will be what is below -->
      <!-- can have multiple slots and set name property, inside panel component
      can put slot="name" on el and the content in the slot with name="name" will
      be rendered there -->
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //     title: "hello"
  //   }
  // }
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
