<template>
  <div class="weather-view">
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
      keys: ['pm', 'co2', 'gas', 'humidity', 'filter', 'celsius']
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
    }
  },
  components: {
    progressbar
  }
}
</script>

<style lang="css">
</style>
