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
    <div class="order-container">
      <div class="order-number">订单编号: {{ orderNumber }}</div>
      <h3 class="order-title">订单详情</h3>
      <div class="order-list">
        <div class="order-item order-header">
          <span class="item-name">商品名称</span>
          <span class="item-quantity">数量</span>
          <span class="item-price">价格</span>
        </div>
        <div v-for="(item, index) in orderItems" :key="index" class="order-item">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-quantity">{{ item.quantity }}</span>
          <span class="item-price">¥{{ item.price }}</span>
        </div>
        <div class="order-total">
          <span class="total-label">总计</span>
          <span class="total-space"></span>
          <span class="total-price">¥{{ totalPrice }}</span>
        </div>
      </div>
    </div>
    <div class="logo-container" style="width: calc(100% - 40px); margin: 20px;">
      <img src="/logo2.jpg" alt="Company Logo" class="logo"/>
    </div>
<!--    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />-->
    <van-submit-bar :price="3050" button-text="微信支付" @submit="onSubmit" class="wechat-pay" />
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from 'vant';
import { showToast } from 'vant';
import NavBar from "./NavBar.vue";
import { useUserStore } from "@/store/modules/user";

const userStore = useUserStore();

const orderNumber = "ORD123456789";
const { nickname } = userStore.getUserInfo;
const formRef = ref<FormInstance>();

const orderItems = ref([
  { name: '商品A', quantity: 1, price: 500 },
  { name: '商品B', quantity: 2, price: 1000 },
  { name: '商品C', quantity: 1, price: 550 }
]);

const totalPrice = computed(() => {
  return orderItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});

const ua = navigator.userAgent.toLowerCase();
const isWeiXin = ua.indexOf('micromessenger') != -1;
const local = encodeURIComponent("https://5d51-2409-8a44-8676-8a70-3daa-5e30-e287-4f1b.ngrok-free.app/#/pay");

function onBridgeReady() {
  WeixinJSBridge.invoke('getBrandWCPayRequest', {
      "appId": "wx668a7d9188ea21c5",     //公众号ID，由商户传入
      "timeStamp": "1713874186",     //时间戳，自1970年以来的秒数
      "nonceStr": "DC1zzQt40HevK0pbalfzM0gceIxJPmLD",      //随机串
      "package": "prepay_id=wx23200947337258e9845642b7d1071e0001",
      "signType": "RSA",     //微信签名方式：
      "paySign": "MZNJJKqYmDEoxzDoyZFjpIQAFSKbsOKqmih/aOzHlFVL1dohgwNr7mLZpqDm1NRjO7TpcrmgdAjHLky8OZkDklCKeiSIviUQehU8cYTWlnTY2J3X6WpqMPBOl9Ra5aTEyDV2QjmGf7LvGrVPoJKGdLCkiRXE30VP2kbLYxIJ5ATt/xk2z5k4HvYM22MbwtQRCKgBsDCFJyMGFhNPsFCV1f/lPzmTlJMKn9B0NE3YQHsOfbI6SdVX1ArBTR+sDB7QkyxQrbt/mJTz6IwFmkMkqIJvIfcLtUIFrpnlH3Lm7/sCG3cMUg8jxkXMLztgHU6tFlK4FFOgHlnPV0dcv3pBnA==" //微信签名
    },
    function(res) {
      if (res.err_msg == "get_brand_wcpay_request:ok") {
        // 使用以上方式判断前端返回,微信团队郑重提示：
        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
      }
    });
}


const onSubmit = () => {
  if (typeof WeixinJSBridge == "undefined") {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
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
onMounted(() => {});
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
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  border-radius: 8px;
  margin: 20px;
  color: #000; /* 设置文本颜色为黑色 */
}
.order-title, .order-number {
  text-align: left; /* 左对齐标题和订单编号 */
  margin-bottom: 20px;
}
.order-list {
  margin: 0;
  padding: 0;
}
.order-item, .order-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.order-header, .item-name, .item-quantity, .item-price {
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
