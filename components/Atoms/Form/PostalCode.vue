<template>
  <div class="postalcode">
    <BaseInputText v-model="value" />
    <div class="postalcode__item">
      {{ address }}
    </div>
  </div>
</template>

<script>
import BaseInputText from '@/components/Atoms/InputText/BaseInputText.vue'

export default {
  components: {
    BaseInputText
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      result: ''
    }
  },
  computed: {
    address() {
      if (!this.result) return ''
      return `${this.result.address1} ${this.result.address2} ${this.result.address3}`
    }
  },
  watch: {
    value: {
      async handler(newValue) {
        if (newValue.length >= 7) {
          const data = await this.$axios.$get(`/api/?zipcode=${newValue}`)
          this.result = data.results[0]
        }
      }
    }
  }
}
</script>

<style></style>
