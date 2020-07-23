<template>
  <div class="form">
    <div class="form__title">{{ title }}</div>
    <slot name="form" />
    <div class="form__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="scss">
.form {
  padding: 24px;
  margin: 24px;
  width: 800px;
  border: 1px #ececec solid;
  background-color: #fff;
  &__title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  &__footer {
    margin-left: 24px;
    display: flex;
    justify-content: center;
  }
}
</style>
