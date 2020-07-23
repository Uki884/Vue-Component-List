<template>
  <input
    v-model="inputValue"
    :placeholder="placeholder"
    type="text"
    class="text_field"
  />
</template>

<script lang="ts">
export default {
  components: {},
  props: {
    value: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
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
}
</script>

<style lang="scss" scoped>
.text_field {
  border: 1px solid #d2d2d2;
  width: 10em;
  height: 2.2em;
  padding: 0.3em 0.5em;
  font-size: 1em;
  &:focus {
    outline-color: #41b883;
  }
}
</style>
