<template lang="pug">
  .weather-view("v-touch:up"="touchUpEvent" "v-touch:down"="touchDownEvent")
    .weather-info.flex
        div
          i.icon.l.sun-cloud
          span.font-size-l {{ `${data.celsius}°` }}
        div
          i.icon.l.pm
          span.font-size-l {{ `${data.pm}` }}
          label ppm
    .weather-info.flex
      div
        i.icon.s.temp
        span.font-size-s 體感溫度
        span.font-size-s {{ `${data.celsius}°` }}
      div
        i.icon.s.wet
        span.font-size-s {{ `${data.humidity}` }}
        label %
      div
        i.icon.s.rain
        span.font-size-s {{ `${data.rain}` }}
        label %
    .flex(@click="touchUpEvent()")
      div
        span ip: {{ $store.state.SETTINGS.ip }}
      div
        span filter: {{ $store.state.MACHINES.list[0].filter }}
      div
        span pm25: {{ $store.state.MACHINES.list[0].pm25 }}
      div
        span vod: {{ $store.state.MACHINES.list[0].vod }}
      div
        span co2: {{ $store.state.MACHINES.list[0].co2 }}

    progressbar(:data="getGroupByEbable()")
</template>

<script>
import progressbar from 'components/progressbar'

export default {
  data () {
    return {
      keys: ['pm', 'co2', 'VOD', 'humidity', 'filter', 'celsius'],
      view: null,
      weather_view: null,
      tool: null
    }
  },

  props: {
    data: Object
  },

  mounted () {
    this.view = document.getElementsByClassName('view')[0]
    this.weather_view = document.getElementsByClassName('weather-view')[0]
    this.tool = document.getElementsByClassName('tool')[0]
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
