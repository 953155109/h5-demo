<template>
  <van-form v-if="getShow" ref="formRef" class="flex flex-col items-center" @submit="handleSubmit">


    <van-field
      v-model="formData.username"
      class="enter-y mb-4 items-center !rounded-md"
      name="username"
      placeholder="用户名"
      :rules="getFormRules.username"
    >
      <template #left-icon>
        <i class="i-ph:user-bold mr-2 text-lg"/>
      </template>
    </van-field>

    <van-field
      v-model="formData.sms"
      class="enter-y mb-10 items-center !rounded-md"
      center
      clearable
      placeholder="请输入短信验证码"
      :rules="getFormRules.sms"
    >
      <template #left-icon>
        <i class="i-material-symbols:edit-square-outline-rounded mr-2 text-lg"/>
      </template>
      <template #button>
        <van-button @click="handleSendSMS" :disabled="countdown > 0">
          {{ countdown > 0 ? `${countdown} 秒后重发` : '发送验证码' }}
        </van-button>
      </template>
    </van-field>

    <!-- <van-field
      v-model="formData.password"
      class="enter-y mb-4 items-center !rounded-md"
      :type="switchPassType ? 'password' : 'text'"
      name="password"
      placeholder="密码"
      :rules="getFormRules.password"
      @click-right-icon="switchPassType = !switchPassType"
    >
      <template #left-icon>
        <i class="i-iconamoon:lock-bold mr-2 text-lg" />
      </template>
      <template #right-icon>
        <i v-if="switchPassType" class="i-mdi:eye-outline mr-2 text-lg" />
        <i v-else class="i-mdi:eye-off mr-2 text-lg" />
      </template>
    </van-field> -->

    <!-- <div class="enter-y mb-10 w-full flex justify-between px-5px">
      <div class="flex items-center">
        <van-switch v-model="rememberMe" size="18px" class="mr-8px" />
        <span>记住我</span>
      </div>
      <a @click="setLoginState(LoginStateEnum.RESET_PASSWORD)">忘记密码?</a>
    </div> -->

    <van-button
      class="enter-y !mb-4 !rounded-md"
      type="primary"
      block
      native-type="submit"
      :loading="loading"
    >
      查 询
    </van-button>
    <!-- <van-button
      class="enter-y !rounded-md"
      plain
      type="primary"
      block
      @click="setLoginState(LoginStateEnum.REGISTER)"
    >
      注 册
    </van-button> -->
  </van-form>
</template>

<script setup lang="ts">
import {showFailToast, showLoadingToast, showSuccessToast} from 'vant'
import type {FormInstance} from 'vant'
import {LoginStateEnum, useFormRules, useLoginState} from './useLogin'
import {useUserStore} from '@/store/modules/user'
import {ResultEnum} from '@/enums/httpEnum'
import {PageEnum} from '@/enums/pageEnum'

import {encryptData,decryptData} from '@/utils/crypto'

const {getLoginState} = useLoginState()
const {getFormRules} = useFormRules()
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const formRef = ref<FormInstance>()
const loading = ref(false)
const formData = reactive({
  username: 'admin',
  password: '123456',
  sms: '',
})

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN)
let countdown = ref(0) // 倒计时时间，单位秒

function startCountdown() {
  countdown.value = 60 // 重置倒计时时间
  const timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--
    } else {
      clearInterval(timer) // 倒计时结束，清除计时器
    }
  }, 1000) // 每秒执行一次
}

function handleSendSMS() {
  // 在这里添加发送验证码的逻辑
  // 发送验证码成功后，启动倒计时
  startCountdown()
}

function handleSubmit() {
  formRef.value
    ?.validate()
    .then(async () => {
      try {
        loading.value = true
        // showLoadingToast('登录中...')
        const {code, message: msg} = await userStore.Login({
          username: formData.username,
          password: formData.password,
        })
        if (code === ResultEnum.SUCCESS) {
          const toPath = decodeURIComponent((route.query?.redirect || '/') as string)
         // showSuccessToast('登录成功，即将进入系统')
          if (route.name === PageEnum.BASE_LOGIN_NAME) {
            await router.replace('/');
          } else {
            await router.replace(toPath);
          }
        } else {
          showFailToast(msg || '登录失败')
        }
      } finally {
        loading.value = false
      }
    })
    .catch(() => {
      console.error('验证失败')
    })
}

onMounted(() => {
})
</script>

<style scoped lang="less"></style>
