<template>
  <div class="index">
    <div class="index__tab">
      <TabItem v-model="currentTab" :id="0" text="コンポーネント一覧" />
      <TabItem v-model="currentTab" :id="1" text="メソッド一覧" />
    </div>
    <keep-alive>
      <component :is="visibleTab" />
    </keep-alive>
  </div>
</template>

<script>
import SelfMadeComponentsList from '@/components/Organisms/SelfMadeComponentsList.vue'
import TabItem from '@/components/Atoms/BaseTabItem.vue'
export default {
  components: {
    SelfMadeComponentsList,
    TabItem
  },
  data() {
    return {
      index: 0,
      currentTab: 0
    }
  },
  computed: {
    visibleTab() {
      let component = ''
      switch (this.currentTab) {
        case 0:
          component = 'SelfMadeComponentsList'
          break
        case 1:
          component = 'TabItem'
          break
      }
      return component
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  &__tab {
    height: 64px;
    width: 100%;
  }
}
</style>
