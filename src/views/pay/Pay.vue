<!--
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2024-04-20 20:40:02
 * @LastEditors: EVE
 * @LastEditTime: 2024-04-27 19:15:17
-->
<template>
  <div>
    <NavBar>
      <template #right> </template>
    </NavBar>
    <div v-if="loading" class="loading-container">
      <van-loading class="loading" color="#1989fa" />
    </div>
    <div v-else class="order-container">
      <div class="order-number">订单编号: {{ orderId }}</div>
      <h3 class="order-title">订单详情</h3>
      <div class="order-list">
        <div class="order-item order-header">
          <span class="item-name">商品名称</span>
          <span class="item-quantity">数量</span>
          <span class="item-price">价格</span>
        </div>
        <div v-for="(item, index) in orderItems" :key="index" class="order-item">
          <span class="item-name">{{ item.goods }}</span>
          <span class="item-quantity">{{ item.count }}</span>
          <span class="item-price">¥{{ item.total }}</span>
        </div>
        <div class="order-total">
          <span class="total-label">总计</span>
          <span class="total-space"></span>
          <span class="total-price">¥{{ totalPrice }}</span>
        </div>
      </div>
    </div>
    <div class="logo-container" style="width: calc(100% - 40px); margin: 20px">
      <img src="/logo2.jpg" alt="Company Logo" class="logo" />
    </div>
    <van-submit-bar
      :price="totalPrice * 100"
      button-text="微信支付"
      @submit="onSubmit"
      class="wechat-pay"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { FormInstance } from "vant";
import { showFailToast } from "vant";
import { showToast } from "vant";
import NavBar from "./NavBar.vue";
import { useUserStore } from "@/store/modules/user";
import { getOrder, getWxpay } from "@/api/sms/sms";
import { createStorage } from "@/utils/Storage";
const Storage = createStorage({ storage: localStorage });

const userStore = useUserStore();
const route = useRoute();
const orderId = route.query.orderId;
const { nickname } = userStore.getUserInfo;
const formRef = ref<FormInstance>();
const loading = ref(false);
const orderItems = ref([]);

const totalPrice = ref(0);
const wxPayMessage = ref({
  appId: "",
  nonceStr: "",
  packageVal: "",
  signType: "",
  paySign: "",
  timeStamp: "",
});

const ua = navigator.userAgent.toLowerCase();
const isWeiXin = ua.indexOf("micromessenger") != -1;
const local = encodeURIComponent(
  "https://5d51-2409-8a44-8676-8a70-3daa-5e30-e287-4f1b.ngrok-free.app/#/pay"
);

function onBridgeReady() {
  const { appId, nonceStr, packageVal, signType, paySign, timeStamp } = wxPayMessage.value;
  WeixinJSBridge.invoke(
    "getBrandWCPayRequest",
    {
      appId, //公众号ID，由商户传入
      timeStamp, //时间戳，自1970年以来的秒数
      nonceStr, //随机串
      package: packageVal,
      signType, //微信签名方式：
      paySign, //微信签名
    },
    function (res) {
      if (res.err_msg == "get_brand_wcpay_request:ok") {
        // 使用以上方式判断前端返回,微信团队郑重提示：
        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
      }
    }
  );
}

// 获取微信支付信息
const getWxpayMessage = async () => {
  loading.value = true;
  const resp = await getWxpay({
    orderPrice: totalPrice.value, // 订单价格  订单详情里面的orderPrice
    description: "", // 订单描述 给空就行
    orderId: orderId, // 订单id  订单详情的ID
    openId: "", //用户openId
    paymentType: 1, //支付类型  写死
  });
  loading.value = false;
  if (resp.code === 200) {
    wxPayMessage.value = resp.data;
  } else {
    showFailToast(resp.message || "发送失败");
  }
};

// 获取订单信息
const getOrderMessage = async () => {
  loading.value = true;
  const phone = Storage.get("phone");
  const resp = await getOrder({ orderId: orderId, customerPhone: phone });
  loading.value = false;
  if (resp.code === 200) {
    orderItems.value = resp.data.goodsInfoDTO;
    totalPrice.value = resp.data.orderPrice;
  } else {
    showFailToast(resp.message || "发送失败");
  }
};

const onSubmit = () => {
  if (typeof WeixinJSBridge == "undefined") {
    if (document.addEventListener) {
      document.addEventListener("WeixinJSBridgeReady", onBridgeReady, false);
    } else if (document.attachEvent) {
      document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
      document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
    }
  } else {
    onBridgeReady();
  }
  showToast("提交成功");
};

// /v3/pay/transactions/jsapi   预支付 获取  prepay_id 有效期为2小时

// 参数
// appid 公众号ID  wx668a7d9188ea21c5
// mchid  直连商户号 1674688120
// openid  普通商户AppID下的唯一标识 oi6Q96-taCoH-dLf1eYdeNpb55Z0
// sing: 商户私钥
onMounted(() => {
  getOrderMessage();
});
</script>

<style scoped lang="less">
.note {
  color: var(--van-text-color-2);
}
.wechat-pay /deep/ .van-button {
  background: #1aad19; /* 微信绿色 */
  color: white;
}
.logo-container {
  text-align: center; /* Logo 居中显示 */
  margin: auto; /* 自动边距以确保居中 */
  max-width: 100%;
}
.logo {
  max-width: 100%; /* Logo 最大宽度100% */
  height: auto; /* 高度自动调整 */
}
.order-container {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 20px;
  color: #000; /* 设置文本颜色为黑色 */
}
.order-title,
.order-number {
  text-align: left; /* 左对齐标题和订单编号 */
  margin-bottom: 20px;
}
.order-list {
  margin: 0;
  padding: 0;
}
.order-item,
.order-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.order-header,
.item-name,
.item-quantity,
.item-price {
  flex: 1;
}
.item-name {
  text-align: left;
}
.item-quantity {
  text-align: center;
}
.item-price {
  text-align: right;
}
.total-label {
  text-align: left;
}
.total-space {
  flex: 1;
}
.total-price {
  text-align: right;
}
</style>
