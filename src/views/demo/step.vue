<!--
 * @Descripttion: 
 * @version: 
 * @Author: EVE
 * @Date: 2024-04-20 20:40:02
 * @LastEditors: EVE
 * @LastEditTime: 2024-04-20 21:55:42
-->
<template>
  <div>
    <NavBar>
      <template #right> </template>
    </NavBar>
    <van-steps direction="vertical" :active="active">
      <van-step v-for="(item, index) in setpList" :key="index">{{ item.title }}</van-step>
    </van-steps>
    <van-button type="default" @click="next">下一步</van-button>
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

const active = ref(1);
const setpList = ref([
  {
    title: "提交审核",
    content: "2016-07-12 19:30",
  },
  {
    title: "审核通过",
    content: "2016-07-12 19:35",
  },
  {
    title: "待确认",
    content: "2016-07-12 20:05",
  },
  {
    title: "待上门",
    content: "2016-07-12 20:05",
  },
  {
    title: "处理中",
    content: "2016-07-12 19:30",
  },
  {
    title: "处理完成",
    content: "2016-07-12 19:35",
  },
  {
    title: "待付款",
    content: "2016-07-12 20:05",
  },
  {
    title: "结算完成",
    content: "2016-07-12 20:05",
  },
]);

const next = () => {
  active.value++;
};
onMounted(() => {});
</script>

<style scoped lang="less">
.note {
  color: var(--van-text-color-2);
}
</style>
