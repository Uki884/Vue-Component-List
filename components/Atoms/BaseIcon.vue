<template>
  <i :class="`mdi mdi-${icon}`" :style="`font-size: ${iconSize}px`" />
</template>

<script lang="ts">
export default {
  components: {},
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  computed: {
    iconSize() {
      switch (this.size) {
        case 'small':
          return '26'
        case 'medium':
          return '32'
        case 'large':
          return '42'
        default:
          return '36'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
i {
  vertical-align: sub;
}
</style>
