<template lang="pug">
  .newItem(v-if="display")
    div
      span 裝置1
    div
      span 請選擇wifi名稱
      select(v-model="value")
        template(v-for="node in $store.state.SETTINGS.wifiList")
          option(":value"="node.name") {{ node.name }}
    div
      span wifi密碼
      input(v-model="password")
    div
      br
      button(@click="send()") 送出
    div
      br
      button(@click="clear()") REST
</template>

<script>
export default {
  name: 'new-item',
  data () {
    return {
      value: '',
      password: ''
    }
  },
  props: {
    display: {
      default: false
    }
  },
  methods: {
    send () {
      this.$store.dispatch('SEND_JOIN', {name: this.value, password: this.password})
      this.display = false
    },
    clear () {
      this.$store.dispatch('SEND_REST')
    }
  }
}
</script>

<style lang="scss" scoped>
  .newItem {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // display: flex;
    text-align: center;
    background-color: black;
    z-index: 99;
  }
</style>
