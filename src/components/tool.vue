<template lang="pug">
  .tool
    .tool-item.flex
      .title.flex
        span.font-size-s 空氣濾淨機
        i.icon.check.onbt(
          ":class"="getDataByKey('filterM') ? 'onbt' : 'offbt'"
          @click="setCheckDataByKey('filterM')"
        )
      .flex.other
        dataRange(
          "iconName"="windspeed"
          "title"="風速"
        )
      //- .flex.other
      //-   .flex.other-g
      //-     .flex.center
      //-       i.icon.s.mode
      //-       span 模式
      //-     span.circle-line(
      //-       ":class"="{ 'checked': getDataByKey('mode')}"
      //-       @click="setCheckDataByKey('mode')"
      //-     ) 睡眠模式
      //-     .flex.center
      //-       i.icon.s.time
      //-       span 定時設置
      //-     i.icon.check(
      //-       ":class"="getDataByKey('time') ? 'onbt' : 'offbt'"
      //-       @click="setCheckDataByKey('time')"
      //-     )
  //-   <!-- <div class="flex tool-item">
  //-     <div class="flex title">
  //-       <span class="font-size-s">除濕機</span>
  //-       <i
  //-         class="icon check"
  //-         :class="getDataByKey('humidityM') ? 'onbt' : 'offbt'"
  //-         @click="setCheckDataByKey('humidityM')"></i>
  //-     </div>
  //-     <div class="flex other">
  //-       <div class="flex other-i">
  //-         <i class="icon s wet_w"></i>
  //-         <span>濕度</span>
  //-       </div>
  //-       <div class="progress-line">
  //-         <div class="bottom-line"></div>
  //-         <div class="data-line" :style="{ 'width': `${getDataByKey('humidity_num')}%` }"></div>
  //-         <em class="data-icon" :style="{ 'margin-left': `${getDataByKey('humidity_num')}%` }"></em>
  //-       </div>
  //-     </div>
  //-   </div> -->
  //-
  //-   <!-- <div class="flex tool-item">
  //-     <div class="flex title">
  //-       <span class="font-size-s">全熱交換器</span>
  //-       <i
  //-         class="icon check"
  //-         :class="getDataByKey('hotM') ? 'onbt' : 'offbt'"
  //-         @click="setCheckDataByKey('hotM')"></i>
  //-     </div>
  //-   </div> -->
  //- </div>
</template>

<script>
import dataRange from 'components/data-range'
export default {
  data () {
    return {}
  },

  props: ['data'],

  methods: {
    getDataByKey (key) {
      return this.data[key]
    },
    setCheckDataByKey (key) {
      this.data[key] = !this.data[key]
    }
  },

  components: {
    dataRange
  }
}
</script>

<style lang="css">
</style>
