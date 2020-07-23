<template>
  <div class="checkbox__wrapper">
    <div
      @click="$emit('input', !value)"
      :class="value ? 'checked' : null"
      class="checkbox"
    />
    <span @click="$emit('input', !value)">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseCheckBox',
  props: {
    value: {
      type: Boolean,
      default: null
    },
    label: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.checkbox {
  cursor: pointer;
  &__wrapper {
    display: flex;
    align-items: center;
    margin-right: 12px;
  }
  flex: none;
  border: solid 3px white;
  box-shadow: 0 0 0 1px gray;
  margin-right: 6px;
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 2px;
  &:hover {
    box-shadow: 0 0 0 1px #41b883;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -2px;
      left: 3px;
      width: 8px;
      height: 14px;
      transform: rotate(40deg);
      border-bottom: 3px solid #fff !important;
      border-right: 3px solid #fff !important;
    }
  }
}

.checked {
  box-shadow: 0 0 0 1px #41b883 !important;
  border: solid 3px #41b883;
  background: #41b883;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -2px;
    left: 3px;
    width: 8px;
    height: 14px;
    transform: rotate(40deg);
    border-bottom: 3px solid #fff !important;
    border-right: 3px solid #fff !important;
  }
}
</style>
