<template>
  <div class="view">
    <navbar
      :title="sampleData.title"
    ></navbar>

    <div class="flex center">{{sampleData.date}}</div>

    <div class="scroll">
      <weather-info
        :data="sampleData"
      ></weather-info>

      <tool
        :data="getGroupByEbable()"></tool>
    </div>
  </div>
</template>

<script>
import navbar from 'components/navbar'
import weatherInfo from 'components/weatherInfo'
import tool from 'components/tool'
import sampleData from 'helper/sampleData.json'

export default {
  data () {
    return {
      sampleData,
      show: true,
      down: false,
      view: null,
      weather_view: null,
      tool: null
    }
  },
  created () {},
  mounted () {
    this.view = document.getElementsByClassName('view')[0]
    this.weather_view = document.getElementsByClassName('weather-view')[0]
    this.tool = document.getElementsByClassName('tool')[0]
    this.tool.style.bottom = `-${this.tool.offsetHeight}px`
  },
  methods: {
    menuClick () {
      this.show = !this.show
      if (this.view.style.left === '' || this.view.style.left === '0px') {
        this.view.style.left = `-${window.innerWidth * 0.7}px`
      } else {
        this.view.style.left = `${0}px`
      }
    },
    getGroupByEbable () {
      return this.sampleData.groups.filter(item => item.enable === true)[0]
    }
  },
  components: {
    navbar,
    weatherInfo,
    tool
  }
}
</script>

<style lang="css">
</style>
