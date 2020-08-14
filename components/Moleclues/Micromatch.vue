<template>
  <div class="">
    <BaseInputText v-model="inputPostalCode" />
    <button @click="matcher()">検証</button>
    {{ result }}
  </div>
</template>

<script>
import micromatch from 'micromatch'
import BaseInputText from '@/components/Atoms/InputText/BaseInputText.vue'
export default {
  components: {
    BaseInputText
  },
  data() {
    return {
      postalCode: '231*',
      inputPostalCode: '',
      result: false
    }
  },
  methods: {
    matcher() {
      const result = micromatch.isMatch(this.inputPostalCode, this.postalCode)
      this.result = result
      console.log(result)
      return result
    }
  }
}
</script>

<style></style>
