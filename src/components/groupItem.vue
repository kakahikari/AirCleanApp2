<template lang="pug">
  .group-wrap
    .group-box(":class"="{'red': item.pm25 >= 200, 'green': item.pm25 < 200}")
      .item
        .gradient(":class"="{'red': item.pm25 >= 200, 'green': item.pm25 < 200}")
          span.font-size-m {{ `${item.celsius}°` }}
          div
            span.font-size-m {{ `${item.humidity}` }}
            span %
      span {{ `PM 2.5 ${item.pm25} ppm` }}
    .between.flex
      span.font-size-s {{ item.group_name }}
      i.icon.s.next
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="css">
</style>
