<template>
  <div class="drawer">
    <div class="flex drawer-navbar">
      <div class="flex center"><i class="icon m new"></i></div>
      <i :class="check ? 'onbt' : 'offbt'" @click="check = !check"></i>
      <div class="flex center"><i class="icon m edit"></i></div>
    </div>

    <group-list
      :data="sampleData.groups"></group-list>
  </div>
</template>

<script>
import groupList from 'components/groupList'
import sampleData from 'helper/sampleData.json'

export default {
  data () {
    return {
      sampleData,
      check: false
    }
  },
  components: {
    groupList
  }
}
</script>

<style lang="css">
</style>
