<!--
 * @Descripttion: 
 * @version: 
 * @Author: EVE
 * @Date: 2024-04-20 21:47:19
 * @LastEditors: EVE
 * @LastEditTime: 2024-04-27 21:50:18
-->
<template>
  <van-nav-bar @click-left="router.back">
    <template #title>
      {{ getTitle }}
    </template>
    <template #left>
      <i class="i-ic:sharp-arrow-back-ios" text-xl />
    </template>
    <template #right>
      <slot name="right" />
    </template>
  </van-nav-bar>
</template>

<script setup lang="ts">
const router = useRouter()
const currentRoute = useRoute()

const getTitle = computed(() => currentRoute.meta.title as string)
</script>

<style scoped lang="less">
</style>
