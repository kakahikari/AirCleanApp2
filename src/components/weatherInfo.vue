<template>
  <div class="weather-view" v-touch:up="touchUpEvent" v-touch:down="touchDownEvent">
    <div class="flex weather-info">
        <div>
          <i class="icon l sun-cloud"></i>
          <span class="font-size-l">{{`${data.celsius}°`}}</span>
        </div>
        <div>
          <i class="icon l pm"></i>
          <span class="font-size-l">{{`${data.pm}`}}</span>
          <label>ppm</label>
        </div>
    </div>
    <div class="flex weather-info">
      <div>
        <i class="icon s temp"></i>
        <span class="font-size-s">體感溫度</span>
        <span class="font-size-s">{{`${data.celsius}°`}}</span>
      </div>
      <div>
        <i class="icon s wet"></i>
        <span class="font-size-s">{{`${data.humidity}`}}</span>
        <label>%</label>
      </div>
      <div>
        <i class="icon s rain"></i>
        <span class="font-size-s">{{`${data.rain}`}}</span>
        <label>%</label>
      </div>
    </div>

    <progressbar
      :data="getGroupByEbable()"></progressbar>


  </div>
</template>

<script>
import progressbar from 'components/progressbar'

export default {
  data () {
    return {
      keys: ['pm', 'co2', 'VOD', 'humidity', 'filter', 'celsius']
    }
  },
  props: {
    data: Object
  },
  created () {
  },
  methods: {
    getGroupByEbable () {
      return this.data.groups.filter(item => item.enable === true)[0]
    },
    // touchRightEvent () {
    //   this.$emit('touchRightEvent')
    // },
    touchUpEvent () {
      this.weather_view.style.top = `-${this.tool.offsetHeight}px`
      this.tool.style.bottom = `${0}px`
    },
    touchDownEvent () {
      this.weather_view.style.top = `${0}px`
      this.tool.style.bottom = `-${this.tool.offsetHeight}px`
    }
  },
  components: {
    progressbar
  }
}
</script>

<style lang="css">
</style>
