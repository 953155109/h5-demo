<!--
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2024-04-20 20:40:02
 * @LastEditors: EVE
 * @LastEditTime: 2024-04-27 18:52:09
-->
<template>
  <div class="step-box">
    <NavBar>
      <template #right></template>
    </NavBar>
    <!-- 输入订单号 -->
    <van-field v-model="orderNumber" placeholder="请输入订单号" button-slot>
      <template #button>
        <van-button type="primary" @click="fetchSteps" :loading="fetching">查询</van-button>
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
import type {FormInstance} from "vant";
import {showToast, showFailToast} from "vant";
import NavBar from "../pay/NavBar.vue";
import {useUserStore} from "@/store/modules/user";
import {getflowStatus} from "@/api/sms/sms";
import {createStorage} from "@/utils/Storage";

const Storage = createStorage({storage: localStorage});
const userStore = useUserStore();

const {nickname} = userStore.getUserInfo;
const formRef = ref<FormInstance>();

const orderNumber = ref("");
const activeStep = ref(0);
const stepsFetched = ref(false);
const fetching = ref(false);

const router = useRouter();
const active = ref(1);
const stepList = ref([
  {
    title: "待工程师接单",
    value: "approved",
    index: 0,
  },
  {
    title: "待上门处理",
    value: "acceptOrder",
    index: 1,
  },
  {
    title: "工单处理中",
    value: "startService",
    index: 2,
  },
  {
    title: "工单处理完成",
    value: "serviceEnd",
    index: 3,
  },
  {
    title: "待结算",
    value: "settlement",
    index: 4,
  },
  {
    title: "质量回访",
    value: "review",
    index: 5,
  },
  {
    title: "已结束",
    value: "end",
    index: 6,
  },
  {
    title: "工单取消",
    value: "cancel",
    index: 7,
  },
]);

const goToSettlement = () => {
  // 处理去结算的逻辑，例如跳转到结算页面或调用支付接口
  showToast("跳转到结算页面...");
  router.push({path: "/pay", query: {orderId: orderNumber.value}});
};

const next = () => {
  active.value++;
};
onMounted(() => {
});

const fetchSteps = async () => {
  fetching.value = true;
  const phone = Storage.get("phone");
  const resp = await getflowStatus({orderId: orderNumber.value, customerPhone: phone});

  if (resp.code === 200) {
    activeStep.value = resp.data.code;
    stepsFetched.value = true;
  } else {
    showFailToast(resp.message || "发送失败");
  }
  fetching.value = false;
};
</script>

<style scoped lang="less">
.step-box {
  /deep/ .van-step__title {
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
