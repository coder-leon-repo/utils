<template>
  <div class="app">
    <h2>发送网络请求：</h2>
    <ul>
      <li v-for="item in homeData" :key="item.id">
        {{ item.pictureUrl }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getHomeCategoriesData } from './api'
import type { HomeCategories } from './types/home'

const homeData = ref<HomeCategories[]>([])

const fecthData = async () => {
  const res = await getHomeCategoriesData()
  homeData.value = res.data
}

onMounted(() => {
  fecthData()
})
</script>

<style scoped></style>
