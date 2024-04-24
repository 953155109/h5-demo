<!--
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2024-04-20 20:40:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-22 12:25:24
-->
<template>
  <div class="step-box">
    <NavBar>
      <template #right></template>
    </NavBar>
    <!-- 输入订单号 -->
    <van-field v-model="orderNumber" placeholder="请输入订单号" button-slot>
      <template #button>
        <van-button type="primary" @click="fetchSteps">查询</van-button>
      </template>
    </van-field>
    <!-- 查询按钮 -->
    <!--    <van-button type="primary" @click="fetchSteps">查询</van-button>-->

    <!-- 根据查询结果显示进度条 -->
    <van-steps v-if="stepsFetched" direction="vertical" :active="activeStep">
      <van-step v-for="(item, index) in stepList" :key="index">
        {{ item.title }}
        <template v-if="item.title === '待结算' && index === activeStep">
          <van-button class="settlement-button" type="default" size="mini" @click="goToSettlement">
            去结算
          </van-button>
        </template>
      </van-step>
    </van-steps>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from "vant";
import { showToast } from "vant";
import NavBar from "../pay/NavBar.vue";
import { useUserStore } from "@/store/modules/user";

const userStore = useUserStore();

const { nickname } = userStore.getUserInfo;
const formRef = ref<FormInstance>();

const orderNumber = ref("");
const activeStep = ref(0);
const stepsFetched = ref(false);
// const stepList = ref([]);
const router = useRouter()
const active = ref(1);
const stepList = ref([
  {
    title: "提交订单",
    content: "2016-07-12 19:30",
  },
  {
    title: "订单审核中",
    content: "2016-07-12 19:35",
  },
  {
    title: "待接单",
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
    title: "待结算",
    content: "2016-07-12 20:05",
  },
  {
    title: "质量回访",
    content: "2016-07-12 20:05",
  },
]);

const goToSettlement = () => {
  // 处理去结算的逻辑，例如跳转到结算页面或调用支付接口
  showToast("跳转到结算页面...");
  router.replace('/pay');
};

const next = () => {
  active.value++;
};
onMounted(() => {});

const fetchSteps = () => {
  // 模拟数据示例
  stepList.value = [
    { title: "提交订单", content: "时间详情" },
    { title: "订单审核中", content: "时间详情" },
    { title: "待接单", content: "时间详情" },
    { title: "待上门", content: "时间详情" },
    { title: "处理中", content: "时间详情" },
    { title: "处理完成", content: "时间详情" },
    { title: "待结算", content: "时间详情" },
    { title: "质量回访", content: "时间详情" },
  ];
  // 假设当前活跃步骤是 "处理中"
  activeStep.value = 6;
  stepsFetched.value = true;
};
</script>

<style scoped lang="less">
.step-box {
  /deep/.van-step__title {
    display: flex;
    align-items: center;
  }
}
.note {
  color: var(--van-text-color-2);
}

.settlement-button {
  min-height: 22px; /* 调整按钮的最小高度，视需求而定 */
  padding: 0 10px; /* 调整按钮的内边距，使其看起来更紧凑 */
  font-size: 14px; /* 调整字体大小 */
  line-height: 22px; /* 调整行高以匹配按钮高度 */
  margin-left: 5px;
}
</style>
