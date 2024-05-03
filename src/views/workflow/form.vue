<!--
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2024-04-20 20:40:02
 * @LastEditors: EVE
 * @LastEditTime: 2024-05-03 14:39:40
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
            v-model="desc"
            name="validatorMessage"
            label="描述信息"
            placeholder="描述信息"
            :rules="[{ required: true, message: '描述信息不能为空' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit"> 提交 </van-button>
        </div>
      </van-form>
    </div>
    <div class="logo-container" style="width: calc(100% - 40px); margin: 20px">
      <img src="/logo2.jpg" alt="Company Logo" class="logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { closeToast, showLoadingToast, showToast, showFailToast } from "vant";
import NavBar from "../pay/NavBar.vue";
import { useUserStore } from "@/store/modules/user";
import { Postform } from "@/api/sms/sms";
import { createStorage } from "@/utils/Storage";
import "vant/lib/index.css";

const router = useRouter();

const customerPhone = ref("");
const customerName = ref("");
const desc = ref("");
const pattern = /^1[3456789]\d{9}$/;

// 校验函数可以返回 Promise，实现异步校验

const onFailed = (errorInfo) => {
  console.log("failed", errorInfo);
};

const onSubmit = async (values) => {
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
