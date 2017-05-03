<template>
  <div class="drawer">
    <div class="flex drawer-navbar">
      <div class="flex center" @click="toggleShowNewItem()"><i class="icon m new"></i></div>
      <i :class="check ? 'onbt' : 'offbt'" @click="check = !check"></i>
      <div class="flex center"><i class="icon m edit"></i></div>
    </div>
    <new-Item :display="showNewItem"></new-Item>

    <group-list
      :data="sampleData.groups"></group-list>
  </div>
</template>

<script>
import groupList from 'components/groupList'
import newItem from 'components/newItem'
import sampleData from 'helper/sampleData.json'

export default {
  data () {
    return {
      sampleData,
      check: false,
      showNewItem: false
    }
  },

  methods: {
    toggleShowNewItem () {
      this.showNewItem = !this.showNewItem
    }
  },

  components: {
    groupList,
    newItem
  }
}
</script>

<style lang="css">
</style>
