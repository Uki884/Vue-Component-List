<template>
  <div class="radio__wrapper">
    <div
      @click="$emit('input', !value)"
      :class="value ? 'checked' : null"
      class="radio"
    />
    <span @click="$emit('input', !value)">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.radio {
  cursor: pointer;
  &__wrapper {
    display: flex;
    align-items: center;
    margin-right: 12px;
  }
  flex: none;
  border: solid 3px white;
  box-shadow: 0 0 0 1px #bbb;
  margin-right: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  &:hover {
    box-shadow: 0 0 0 1px #bbb;
    background: #bbb;
  }
}

.checked {
  background: #333 !important;
  box-shadow: 0 0 0 1px #333 !important;
}
</style>
