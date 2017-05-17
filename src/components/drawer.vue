<template lang="pug">
  .drawer
    .drawer-navbar.flex
      .flex.center(@click="newItem()")
        i.icon.m.new
      i(:class="check ? 'onbt' : 'offbt'" @click="check = !check")
      .flex.center
        i.icon.m.edit
    group-list(":data"="$store.state.MACHINES.list")
  </div>
</template>

<script>
import groupList from 'components/groupList'

export default {
  data () {
    return {
      check: false,
      showNewItem: false
    }
  },

  methods: {
    newItem () {
      this.$router.push({ name: 'new' })
    }
  },

  components: {
    groupList
  }
}
</script>

<style lang="css">
</style>
