<template lang="pug">
  //- .progress-view(v-if="$store.state.MACHINES.list[0].id != '0000'")
  .progress-view
    .group-list.flex.between
      span.font-size-s {{ data.group_name }}
      .line.flex-1
    .progress-group.flex
      progressbar-item(
        ":key"="filter"
        ":index"="0"
        ":num"="data[key]"
        ":value"="$store.state.MACHINES.list[0].filter"
        ":unit"="'%'"
        ":waring"="getWaring(key)"
        ":name"="'濾網'"
      )
      progressbar-item(
        ":key"="pm25"
        ":index"="1"
        ":num"="data[key]"
        ":value"="$store.state.MACHINES.list[0].pm25"
        ":unit"="'mg/m3'"
        ":waring"="getWaring(key)"
        ":name"="'PM2.5'"
      )
      progressbar-item(
        ":key"="vod"
        ":index"="2"
        ":num"="data[key]"
        ":value"="$store.state.MACHINES.list[0].vod"
        ":unit"="'ppm'"
        ":waring"="getWaring(key)"
        ":name"="'VOD'"
      )
      progressbar-item(
        ":key"="co2"
        ":index"="3"
        ":num"="data[key]"
        ":value"="$store.state.MACHINES.list[0].co2"
        ":unit"="'ppm'"
        ":waring"="getWaring(key)"
        ":name"="'CO2'"
      )
      //- progressbar-item(
      //-   v-for="(key, index) in keys"
      //-   ":key"="index"
      //-   ":index"="index"
      //-   ":num"="data[key]"
      //-   ":unit"="getUnit(key)"
      //-   ":waring"="getWaring(key)"
      //-   ":name"="getKeyName(index)"
      //- )
</template>

<script>
import progressbarItem from 'components/progressbarItem'

export default {
  data () {
    return {
      keys: ['pm', 'co2', 'VOD', 'humidity', 'filter', 'celsius'],
      num: 0
    }
  },
  props: ['data'],
  mounted () {},
  methods: {
    drawLine (lineWidth, Num, index) {
      const bg = document.getElementById(`canvas_${index}`)
      const ctx = bg.getContext('2d')
      ctx.beginPath()
      ctx.lineWidth = lineWidth
      ctx.strokeStyle = '#fff'
      ctx.arc(45, 45, 40, 0.7 * Math.PI, Num * Math.PI, false)
      ctx.stroke()
    },
    getKeyName (index) {
      const name = ['PM2.5', 'CO2', 'VOD', '室內濕度', '濾網:良好', '室內溫度']
      if (this.keys[index] === 'filter' && this.data[this.keys[index]] > 70) {
        return '濾網:需更換'
      }
      return name[index]
    },
    getUnit (key) {
      const unitKey = ['pm', 'co2', 'VOD']
      const isSame = unitKey.some(k => k === key)
      return isSame ? 'ppm' : '%'
    },
    getWaring (key) {
      if (key === 'filter' && this.data[key] > 70) {
        return true
      }
      return false
    },
    setNum (num) {
      this.num = 0
      this.num = num
    }
  },
  components: {
    progressbarItem
  }
}
</script>

<style lang="css">
</style>
