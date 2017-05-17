<template lang="pug">
  .scroll
    .group-list.flex.between
      span.font-size-s 目前選定群組
      .line.flex-1

    group-item(
      v-for="(item, index) in getDataByEnable(true)"
      ":item"="item"
      ":key"="`current_group${index}`"
    )

    .group-list.flex.between
      span.font-size-s 群組列表
      .line.flex-1

    group-item(
      v-for="(item, index) in getDataByEnable(false)"
      ":item"="item"
      ":key"="`group${index}`"
    )
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
