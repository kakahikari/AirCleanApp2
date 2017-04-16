<template>
  <div>
    <div class="flex navbar">
      <div class="flex center"><i class="icon m setting"></i></div>
      <span>{{title}}</span>
      <div @click="menuClick" class="flex center"><i class="icon m menu"></i></div>
    </div>
    <drawer></drawer>
  </div>
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
