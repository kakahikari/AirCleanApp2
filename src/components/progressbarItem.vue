<template lang="pug">
  .progress
    .progress-box
      canvas(":id"="`canvas_${index}`" width="90" height="90")
      //- <i-count-up
      //-   class="flex progress-info value"
      //-   :start="0"
      //-   :end="num"
      //-   :decimals="0"
      //-   :duration="2.5">
      span.progress-info.flex.value {{ value }}
      span.progress-info.flex.unit {{ unit }}
      //- <div v-if="waring"><i class="notice"></i></div>
    span.progress-name {{ name }}
</template>

<script>
import ICountUp from 'vue-countup-v2'

export default {
  props: {
    index: {
      type: Number
    },
    value: {
      default: 0
    },
    num: {
      type: Number,
      default: 0
    },
    unit: {
      type: String
    },
    waring: {
      type: Boolean
    },
    name: {
      type: String
    }
  },
  computed: {},
  mounted () {
    let defaultNum = 7
    let count = 0
    for (let i = 1; i <= 16; i += 1) {
      if (count < this.num) {
        count += 6.25
        defaultNum += 1
      } else {
        break
      }
    }

    // 預設細線
    this.drawLine(1, 2.3)

    // 粗線
    if (this.unit !== 'ppm') {
      this.drawLine(5, (defaultNum / 10))
    }
  },
  methods: {
    drawLine (lineWidth, Num) {
      const bg = document.getElementById(`canvas_${this.index}`)
      const ctx = bg.getContext('2d')
      ctx.beginPath()
      ctx.lineWidth = lineWidth
      ctx.strokeStyle = '#fff'
      ctx.arc(45, 45, 40, 0.7 * Math.PI, Num * Math.PI, false)
      ctx.stroke()
    }
  },
  components: {
    ICountUp
  }
}
</script>

<style lang="css">
</style>
