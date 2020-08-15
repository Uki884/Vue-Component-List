<template>
  <textarea v-model="inputValue" :placeholder="placeholder" class="textarea" />
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
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
.textarea {
  margin: 0px;
  height: 172px;
  width: 360px;
  resize: none;
  &:focus {
    outline-color: #41b883;
  }
}
</style>
