<template>
  <div class="scroll">
    <div class="flex between group-list">
      <span class="font-size-s">目前選定群組</span>
      <div class="line flex-1"></div>
    </div>

    <group-item
      v-for="(item, index) in getDataByEnable(true)"
      :item="item"
      :key="`current_group${index}`"></group-item>

    <div class="flex between group-list">
      <span class="font-size-s">群組列表</span>
      <div class="line flex-1"></div>
    </div>

    <group-item
      v-for="(item, index) in getDataByEnable(false)"
      :item="item"
      :key="`group${index}`"></group-item>
  </div>
</template>

<script>
import groupItem from 'components/groupItem'

export default {
  props: {
    data: Array
  },
  methods: {
    getDataByEnable (enable) {
      return this.data.filter(item => item.enable === enable)
    }
  },
  components: {
    groupItem
  }
}
</script>

<style lang="css">
</style>
