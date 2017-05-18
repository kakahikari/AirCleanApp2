<template lang="pug">
  section.view-settings
    header
      .close("@click"="goHome()")
      .title 設定
      .nothing
</template>

<script>
export default {
  name: 'settings',

  methods: {
    goHome () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="css">
</style>
