<template>
  <div class="tool">
    <div class="flex tool-item">
      <div class="flex title">
        <span class="font-size-s">空氣濾淨機</span>
        <i
          class="icon check onbt"
          :class="getDataByKey('filterM') ? 'onbt' : 'offbt'"
          @click="setCheckDataByKey('filterM')"></i>
      </div>
      <div class="flex other">
        <div class="flex other-i">
          <i class="icon s windy"></i>
          <span>風速</span>
        </div>
        <div class="progress-line">
          <div class="bottom-line"></div>
          <div class="data-line" :style="{ 'width': `${getDataByKey('windy_num')}%` }"></div>
          <em class="data-icon" :style="{ 'margin-left': `${getDataByKey('windy_num')}%` }"></em>
        </div>
      </div>
      <div class="flex other">
        <div class="flex other-g">
          <div class="flex center">
            <i class="icon s mode"></i>
            <span>模式</span>
          </div>
          <span
            class="circle-line"
            :class="{ 'checked': getDataByKey('mode')}"
            @click="setCheckDataByKey('mode')">睡眠模式</span>
          <div class="flex center">
            <i class="icon s time"></i>
            <span>定時設置</span>
          </div>
          <i
            class="icon check"
            :class="getDataByKey('time') ? 'onbt' : 'offbt'"
            @click="setCheckDataByKey('time')"></i>
        </div>
      </div>
    </div>
    <div class="flex tool-item">
      <div class="flex title">
        <span class="font-size-s">除濕機</span>
        <i
          class="icon check"
          :class="getDataByKey('humidityM') ? 'onbt' : 'offbt'"
          @click="setCheckDataByKey('humidityM')"></i>
      </div>
      <div class="flex other">
        <div class="flex other-i">
          <i class="icon s wet_w"></i>
          <span>濕度</span>
        </div>
        <div class="progress-line">
          <div class="bottom-line"></div>
          <div class="data-line" :style="{ 'width': `${getDataByKey('humidity_num')}%` }"></div>
          <em class="data-icon" :style="{ 'margin-left': `${getDataByKey('humidity_num')}%` }"></em>
        </div>
      </div>
    </div>

    <div class="flex tool-item">
      <div class="flex title">
        <span class="font-size-s">全熱交換器</span>
        <i
          class="icon check"
          :class="getDataByKey('hotM') ? 'onbt' : 'offbt'"
          @click="setCheckDataByKey('hotM')"></i>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="css">
</style>
