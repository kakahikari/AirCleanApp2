<template lang="pug">
  div
    .flex.navbar
      .flex.center
        i.icon.m.setting(@click="settingClick()")
      span {{title}}
      .flex.center(@click="menuClick()")
        i.icon.m.menu
    drawer
</template>

<script>
import drawer from 'components/drawer'

export default {
  data () {
    return {}
  },
  props: {
    title: String
  },
  methods: {
    menuClick () {
      this.show = !this.show
      const view = document.getElementsByClassName('view')[0]
      if (view.style.left === '' || view.style.left === '0px') {
        view.style.left = `-${window.innerWidth * 0.7}px`
      } else {
        view.style.left = `${0}px`
      }
    },
    settingClick () {
      this.$router.push({ name: 'settings' })
    }
  },
  created () {},
  components: {
    drawer
  }
}
</script>

<style lang="css">
</style>
