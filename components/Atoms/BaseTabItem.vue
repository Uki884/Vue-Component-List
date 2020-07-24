<template>
  <button
    @click="updateValue()"
    :class="value === id ? 'selected' : null"
    :style="`width:${tabWidth}%;`"
    class="tab__item"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: null
    },
    itemCount: {
      type: Number,
      default: null
    }
  },
  computed: {
    tabWidth() {
      return 100 / this.itemCount
    }
  },
  methods: {
    updateValue() {
      this.$emit('input', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  // height: 50px;
  &__item {
    cursor: pointer;
    padding: 12px;
    font-size: 12px;
    font-weight: bold;
    background: white;
    border-bottom: 3px solid #5ab4bd;
    border: none;
    &:focus {
      outline: 0;
    }
  }
}
.selected {
  background: #5ab4bd;
  color: white;
}
</style>
