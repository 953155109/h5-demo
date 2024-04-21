<!--
 * @Descripttion: 
 * @version: 
 * @Author: EVE
 * @Date: 2024-04-20 20:40:02
 * @LastEditors: EVE
 * @LastEditTime: 2024-04-20 22:07:15
-->
<template>
  <div>
    <NavBar>
      <template #right> </template>
    </NavBar>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from "vant";
import { showToast } from "vant";
import NavBar from "./components/NavBar.vue";
import { useUserStore } from "@/store/modules/user";

const userStore = useUserStore();

const { nickname } = userStore.getUserInfo;
const formRef = ref<FormInstance>();

const onSubmit = () => {
  
      showToast("提交成功");
  
 
  
};

onMounted(() => {});
</script>

<style scoped lang="less">
.note {
  color: var(--van-text-color-2);
}
</style>
