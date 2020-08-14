<template>
  <div class="components">
    <div class="components__header">
      自作コンポーネント一覧
    </div>
    <div class="component">
      <div class="component__header">
        Input Text
      </div>
      <div class="component__item">
        <FormComponent label="ベーシックなやつ">
          <BaseInputText />
        </FormComponent>
      </div>
    </div>
    <div class="component">
      <div class="component__header">
        SelectBox
      </div>
      <div class="component__item">
        <FormComponent label="ベーシックなやつ">
          <BaseSelectBox :options="options" key-name="text" />
        </FormComponent>
      </div>
    </div>
    <div class="component">
      <div class="component__header">
        郵便番号取得
      </div>
      <div class="component__item">
        <FormComponent label="ベーシックなやつ">
          <PostalCode v-model="postalCode" />
        </FormComponent>
      </div>
    </div>
    <div class="component">
      <div class="component__item">
        <FormComponent label="郵便番号ワイルドカード">
          <Micromatch />
        </FormComponent>
      </div>
    </div>
    <div class="component">
      <div class="component__item">
        <FormComponent label="googleMap">
          <GoogleMap />
        </FormComponent>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInputText from '@/components/Atoms/InputText/BaseInputText.vue'
import BaseSelectBox from '@/components/Atoms/SelectBox/BaseSelectBox.vue'
import FormComponent from '@/components/Atoms/Form/FormComponent.vue'
import PostalCode from '@/components/Atoms/Form/PostalCode.vue'
import Micromatch from '@/components/Moleclues/Micromatch.vue'
import GoogleMap from '@/components/Moleclues/GoogleMap.vue'
export default {
  components: {
    FormComponent,
    BaseInputText,
    BaseSelectBox,
    PostalCode,
    Micromatch,
    GoogleMap
  },
  data() {
    return {
      postalCode: '',
      options: [
        { text: 'test', value: 1 },
        { text: 'test', value: 2 },
        { text: 'test', value: 3 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.components {
  margin: 24px;
  &__header {
    font-size: 24px;
    font-weight: bold;
  }
}

.component {
  padding: 12px;
  border: dotted;
  margin-bottom: 12px;
  &__header {
    margin: 24px;
    text-decoration: underline;
  }
}
</style>
