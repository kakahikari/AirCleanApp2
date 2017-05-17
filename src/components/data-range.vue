<template lang="pug">
  .data-range
    span(":class"="iconName") {{ title }}
    input(v-model="value" type="range" ":min"="min" ":max"="max" ":step"="step")
</template>

<script>
export default {
  name: 'data-range',

  props: {
    iconName: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    step: {
      type: Number,
      default: 1
    }
  },

  data () {
    return {
      value: 0
    }
  },

  mounted () {
    this.drawBar(this.value)
  },

  methods: {
    drawBar (value) {
      var target = this.$el.getElementsByTagName('input')[0]
      var total = target.getAttribute('max')
      var fill = value / total * 100
      target.style['background-image'] = '-webkit-linear-gradient(left, white, white ' + fill + '%, transparent ' + fill + '%, transparent)'
    }
  },

  watch: {
    value (newVal) {
      this.drawBar(newVal)
    }
  }
}
</script>
<style lang="scss" scoped>
$_icon-size: 18px;
$_bar-size: 4px;

.data-range {
  position: relative;
  width: 100%;
  padding-left: 76px;
  span {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-flex;
    align-items: center;
    height: 100%;
    padding-left: $_icon-size + 5px;
    &:after {
      position: absolute;
      top: calc(50% - #{$_icon-size/2});
      left: 0;
      width: $_icon-size;
      height: $_icon-size;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      content: '';
    }
    &.dehumidifier {
      &:after {
        background-image: url('../assets/images/icon-wet.svg');
        background-size: 8px 12px;
      }
    }
    &.windspeed {
      &:after {
        background-image: url('../assets/images/icon-windy.svg');
        background-size: 19px 12px;
      }
    }
  }
  input {
    position: relative;
    width: 100%;
    background: none;
    background-color: rgba(#000, .54);
    border-radius: $_bar-size;
    outline: none;
    -webkit-appearance: none;
    border: 0;
    padding: 0;
    &:focus {
      outline: 0;
    }
    &::-webkit-slider-thumb {
      position: relative;
      top: calc(50% - #{$_icon-size/2});
      width: $_icon-size;
      height: $_icon-size;
      background: #fff;
      border-radius: 50%;
      -webkit-appearance: none;
    }
    &::-webkit-slider-runnable-track {
      height: $_bar-size;
      border-radius: $_bar-size;
    }
  }
}
</style>
