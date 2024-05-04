<!--
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2024-04-20 20:40:02
 * @LastEditors: EVE
 * @LastEditTime: 2024-05-03 20:32:55
-->
<template>
  <div class="step-box">
    <NavBar>
      <template #right></template>
    </NavBar>
    <!-- 输入订单号 -->
    <!-- <div style="display: flex; justify-content: center; margin-top: 20px; height: 56px">
      <van-button type="primary" @click="goToForm">下单</van-button>
    </div> -->
    <div style="min-height: 100vh; padding-bottom: 40px">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <div v-if="orderList && orderList.length > 0">
          <van-list
            style="height: 100%; overflow: auto"
            :finished="finished"
            finished-text="没有更多了"
          >
            <van-cell v-for="item in orderList" :key="item.orderId">
              <template #title>
                <li>订单编号：{{ item.orderId }}</li>
                <li>维修类型：{{ item.repairType }}</li>
                <li>受理时间：{{ item.acceptTime }}</li>
                <div
                  style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  width: 100%;
                "
                >
                <span>
                  <li>订单状态：{{ item.statusDesc }}</li>
                </span>
                  <van-button
                    v-if="item.status === 'settlement' && item.paymentStatus === 0"
                    class="settlement-button"
                    type="default"
                    size="mini"
                    style="background-color: #1aad19; color: white"
                    @click="goToSettlement(item.orderId)"
                  >
                    去结算
                  </van-button>
                  <van-button
                    v-if="item.paymentStatus === 1"
                    class="settlement-button"
                    type="default"
                    size="mini"
                    @click="goToSettlement(item.orderId)"
                  >
                    订单详情
                  </van-button>
                </div>
                <van-button
                  v-if="item.code !== 7"
                  size="mini"
                  type="primary"
                  style="background-color: white; color: #333; border: 1px solid #ccc"
                  @click="item.isVisible = !item.isVisible"
                >
                  {{ item.isVisible ? "隐藏流程" : "查看流程" }}
                </van-button>
                <van-steps v-if="item.isVisible" direction="vertical" :active="item.code">
                  <van-step v-for="(step, index) in stepList" :key="index">
                    {{ item.paymentStatus === 1 && step.title === "待结算" ? "已支付" : step.title }}
                  </van-step>
                </van-steps>
              </template>
            </van-cell>
          </van-list>
        </div>
        <div v-else class="empty-order">
          您还没有订单，请先下单
        </div>
      </van-pull-refresh>
    </div>
    <div class="fixed-bottom">
      <van-button block type="primary" @click="goToForm">去下单</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, List } from "vant";
import { showToast, showFailToast } from "vant";
import NavBar from "../pay/NavBar.vue";
import { useUserStore } from "@/store/modules/user";
import { getflowStatus } from "@/api/sms/sms";
import { createStorage } from "@/utils/Storage";

const Storage = createStorage({ storage: localStorage });
const userStore = useUserStore();

const formRef = ref<FormInstance>();

const fetching = ref(false);
const refreshing = ref(false);
const finished = ref(false);
const pageSize = ref(5);
const page = ref(1);
const total = ref(0);

interface Order {
  code: number;
  status: string;
  orderId: string;
  paymentStatus: number;
  repairType: string;
  acceptTime: string;
  statusDesc: string;
  isVisible: boolean;
}

const orderList = ref<Order[]>([]);

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
  /* {
     title: "工单取消",
     value: "cancel",
     index: 7,
   },*/
]);

const goToSettlement = (orderId) => {
  // 处理去结算的逻辑，例如跳转到结算页面或调用支付接口
  showToast("跳转到结算页面...");
  router.push({ path: "/pay", query: { orderId: orderId } });
};
const goToForm = () => {
  showToast("跳转到下单页面...");
  router.push({ path: "/form", query: {} });
};

onMounted(() => {
  fetchSteps();
});
// 下拉请求
const onRefresh = () => {
  if (!finished.value) {
    pageSize.value += 5;
    fetchSteps();
  } else {
    fetching.value = false;
    refreshing.value = false;
  }
};
// 请求接口
const fetchSteps = async () => {
  fetching.value = true;
  refreshing.value = true;

  const phone = Storage.get("phone");
  const resp = await getflowStatus({
    pageSize: pageSize.value,
    page: page.value,
    customerPhone: phone,
  });
  if (resp.code === 200) {
    console.log(resp.data);
    orderList.value = resp.data.workNodeStatusVOS.content;
    total.value = resp.data.count;
    if (orderList.value.length >= total.value) {
      finished.value = true;
    }
  } else {
    showFailToast(resp.message || "发送失败");
  }
  fetching.value = false;
  refreshing.value = false;
};
</script>

<style scoped lang="less">
.step-box {
  /deep/ .van-step__title {
    display: flex;
    align-items: center;
  }

  /deep/ .van-cell .van-cell__title {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px;
    border-radius: 8px;
    padding: 15px;
  }
}

.note {
  color: var(--van-text-color-2);
}
.fixed-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.settlement-button {
  background-color: #1aad19;
  color: white;
  border: none;
  min-height: 22px; /* 调整按钮的最小高度，视需求而定 */
  padding: 0 10px; /* 调整按钮的内边距，使其看起来更紧凑 */
  font-size: 14px; /* 调整字体大小 */
  line-height: 22px; /* 调整行高以匹配按钮高度 */
  margin-left: 5px;
}
.empty-order {
  text-align: center;
  color: #aaa; /* 淡灰色 */
  margin-top: 20px;
}
</style>
