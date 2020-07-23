<template>
  <div class="form-component">
    <div class="form-component__label">
      {{ label }}
      <span v-if="required" class="form-component__required">必須</span>
      <span v-if="caption">{{ caption }}</span>
    </div>
    <slot name="content" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.form-component {
  margin-left: 24px;
  margin-bottom: 2em;
  &__label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &__required {
    background-color: #41b883;
    padding: 2px 6px;
    font-size: 0.65em;
    color: #fff;
    margin-left: 6px;
    vertical-align: 2px;
    display: inline-block;
    min-width: 34px;
    text-align: center;
    font-weight: normal;
  }
}
</style>
