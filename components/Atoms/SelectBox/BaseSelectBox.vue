<template>
  <div @mouseover="isOpen = true" @mouseleave="isOpen = false" class="select">
    {{ value }}
    <BaseIcon icon="chevron-down" size="small" />
    <div v-if="isOpen" class="select-dropdown">
      <div v-for="(option, index) in options" :key="index">
        <div :value="option.id" @click="select(option.value)" class="option">
          {{ option[keyName] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseIcon from '@/components/Atoms/BaseIcon.vue'

export default {
  components: { BaseIcon },
  props: {
    value: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    keyName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    select(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  cursor: pointer;
  position: relative;
  border: 1px solid #d2d2d2;
  width: 10em;
  height: 2.2em;
  padding: 0.3em 0.5em;
  font-size: 1em;
  color: black;
  background-color: white;
  user-select: none;
  i {
    position: absolute;
    right: 0;
    top: -4px;
  }
  &-content {
    box-sizing: border-box;
    padding: 0px 12px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .select-label {
      font-size: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 94%;
    }
    svg {
      font-size: 16px;
    }
  }
}
.select-dropdown {
  z-index: 99;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px gray solid;
  background-color: white;
  position: absolute;
  font-size: 12px;
  text-align: left;
  overflow: auto;
  left: 0px;
  top: 34px;
  .option {
    padding: 8px;
    user-select: none;
    color: black;
    &:hover {
      background-color: gray;
    }
  }
}
</style>
