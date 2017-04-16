<template>
  <div class="group-wrap">
    <div class="group-box" :class="{'red': item.pm >= 200, 'green': item.pm < 200}">
      <div class="item">
        <div class="gradient" :class="{'red': item.pm >= 200, 'green': item.pm < 200}">
          <span class="font-size-m">{{`${item.celsius}°`}}</span>
          <div>
            <span class="font-size-m">{{`${item.humidity}`}}</span>
            <span>%</span>
          </div>
        </div>
      </div>
      <span>{{`PM 2.5 ${item.pm} ppm`}}</span>
    </div>
    <div class="flex between">
      <span class="font-size-s">{{item.group_name}}</span>
      <i class="icon s next"></i>
    </div>
  </div>
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
