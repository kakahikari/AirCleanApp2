<template lang="pug">
  section.view-new
    header
      .close("@click"="goHome()")
      .title 新增裝置
      .nothing
    .view-new__banner
    .view-new__container
      template(v-if="$store.state.SETTINGS.wifiList.length == 0")
        .row.tac
          span 請先將手機連上裝置WIFI
        .row.tac
          button.form-button(@click="retry()") 重新連接
      template(v-else)
        .row.form-select
          select
            option(value="") 選擇加入群組 (若無群組則自動新增)
        .row
          input(placeholder="請輸入裝置名稱")
        .row.form-select
          select(v-model="wifiname")
            option(value="") 家用WIFI名稱
            template(v-for="node in $store.state.SETTINGS.wifiList")
              option(":value"="node.name") {{ node.name }}
        .row
          input(type="password" placeholder="家用WIFI密碼" v-model="password")
        .row.tac
          button.form-button.check(@click="send()") 確定加入此裝置
      .row.tac(v-if="getIPEnable")
        button.form-button(@click="getIP()") 取得裝置IP(GETIP)
      .row.tac
        button.form-button(@click="sendREST()") 重設裝置(REST)
</template>

<script>
export default {
  name: 'new',

  data () {
    return {
      wifiname: '',
      password: '',
      getIPEnable: false
    }
  },

  mounted () {
    this.$store.commit('SET_SETTINGS_JOIN', true)
    this.$root.tryConnect('192.168.0.13')
  },

  methods: {
    send () {
      this.$root.tryConnect('192.168.0.13')
      setTimeout(() => {
        for (var i = 0; i < 3; i++) {
          this.$store.dispatch('SEND_JOIN', {name: this.wifiname, password: this.password})
        }
        this.getIP()
        alert('加入指令已送出，請重新連回裝置WIFI並按下取得ip')
        this.getIPEnable = true
      }, 1000)
    },
    getIP () {
      this.$root.tryConnect('192.168.0.13')
      this.$store.dispatch('SEND_GETIP')
    },
    sendREST () {
      this.$root.tryConnect('192.168.0.13')
      for (var i = 0; i < 3; i++) {
        this.$store.dispatch('SEND_REST')
      }
      this.goHome()
    },
    goHome () {
      this.$router.push({ name: 'home' })
    },
    retry () {
      this.$store.commit('SET_SETTINGS_JOIN', true)
      this.$root.tryConnect('192.168.0.13')
    }
  }
}
</script>
