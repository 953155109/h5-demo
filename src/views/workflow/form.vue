<!--
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2024-04-20 20:40:02
 * @LastEditors: EVE
 * @LastEditTime: 2024-05-03 15:04:39
-->
<template>
  <div>
    <NavBar>
      <template #right></template>
    </NavBar>
    <div class="order-container">
      <van-form @failed="onFailed" @submit="onSubmit">
        <van-cell-group inset>
          <!-- 通过 pattern 进行正则校验 -->
          <van-field
            v-model="customerPhone"
            name="pattern"
            label="手机号"
            placeholder="手机号"
            :rules="[{ pattern, message: '请输入正确的手机号！' }]"
          />
          <!-- 通过 validator 进行函数校验 -->
          <van-field
            v-model="customerName"
            name="validator"
            label="姓名"
            placeholder="客户姓名"
            :rules="[{ required: true, message: '姓名不能为空' }]"
          />
          <!-- 通过 validator 返回错误提示 -->
          <van-field
            type="textarea"
            v-model="desc"
            name="validatorMessage"
            label="描述"
            placeholder="请详细描述一下需要维修的内容"
            :rows="3"
            :autosize="{ minRows: 2, maxRows: 5 }"
            :rules="[{ required: true, message: '描述不能为空' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit"> 提交</van-button>
        </div>
      </van-form>
    </div>
    <div class="logo-container" style="width: calc(100% - 40px); margin: 20px">
      <img src="/logo2.jpg" alt="Company Logo" class="logo"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {closeToast, showLoadingToast, showToast, showFailToast} from "vant";
import NavBar from "../pay/NavBar.vue";
import {useUserStore} from "@/store/modules/user";
import {getWxOpenId, Postform} from "@/api/sms/sms";
import {createStorage} from "@/utils/Storage";

const Storage = createStorage({storage: localStorage});
import "vant/lib/index.css";

const router = useRouter();
const phone = Storage.get("phone");
const customerPhone = ref(phone);
const customerName = ref("");
const desc = ref("");
const pattern = /^1[3456789]\d{9}$/;
const ua = navigator.userAgent.toLowerCase();
const isWeiXin = ua.indexOf("micromessenger") != -1;
const userStore = useUserStore();
const code = ref("");
// 校验函数可以返回 Promise，实现异步校验

const onFailed = (errorInfo) => {
  console.log("failed", errorInfo);
};
const getWXUserOpenId = async () => {
  const resp = await getWxOpenId({
    code: code.value,
    customerPhone: phone,
  });
  if (resp.code === 200) {
    userStore.setOpenId(resp.data);
  } else {
    showFailToast(resp.message || "微信OpenId获取失败");
    throw Error("微信OpenId获取失败");
  }
};
const onSubmit = async (values) => {

   if (!isWeiXin) {
   showToast("请在微信客户端进行操作");
   return;
 }

  const openId = userStore.getUserOpenId;
  // 提交的时候没有获取openId
  if (!openId) {
    showToast("获取微信标识失败,请重新提交订单");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }


  const resp = await Postform({
    customerPhone: customerPhone.value,
    customerName: customerName.value,
    desc: desc.value,
  });
  if (resp.code === 200) {
    showToast("提交成功");
    router.back()
  } else {
    showFailToast(resp.message || "发送失败");
  }
};

onMounted(() => {
  if (isWeiXin) {
    const openId = userStore.getUserOpenId;
    if (!openId) {
      //code不存在 获取code
      if (!code.value) {
        const parsedUrl = new URL(window.location.href);
        if (parsedUrl.searchParams.has("code")) {
          // 如果存在，获取 "code" 参数
          code.value = parsedUrl.searchParams.get("code") || "";
        }
      }
      // 获取到code
      if (code.value) {
        // 获取用户openid
        getWXUserOpenId();
        return;
      }
      // 否则code 不存在 跳转获取code
      const appId = "wx668a7d9188ea21c5";
      const redirect = encodeURIComponent(window.location.href);
      window.location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
        appId +
        "&redirect_uri=" +
        redirect +
        "&response_type=code&scope=snsapi_base&state=123#wechat_redirect";
    }
  }
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
