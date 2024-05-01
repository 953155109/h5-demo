import {defineStore} from 'pinia'
import {createStorage} from '@/utils/Storage'
import {store} from '@/store'
import {ACCESS_TOKEN, CURRENT_USER, USER_OPEN_ID} from '@/store/mutation-types'
import {ResultEnum} from '@/enums/httpEnum'
import {doLogout, getUserInfo, login} from '@/api/system/user'
import {PageEnum} from '@/enums/pageEnum'
import router from '@/router'

const Storage = createStorage({storage: localStorage})

interface UserInfo {
  userId: string | number
  username: string
  realname: string
  nickname: string
  avatar: string
  cover: string
  gender: number
  phone: string
  sign?: string
  industry?: number
}

interface IUserState {
  token?: string
  openId?: string
  userInfo: Nullable<UserInfo>
  lastUpdateTime: number
}

interface LoginParams {
  username: string
  password: string
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): IUserState => ({
    userInfo: null,
    token: undefined,
    openId: undefined,
    lastUpdateTime: 0,
  }),
  getters: {
    getUserInfo() {
      return {}
    },
    getToken(): string {
      return this.token || Storage.get(ACCESS_TOKEN, '')
    },
    getUserOpenId(): string {
      return this.openId || Storage.get(USER_OPEN_ID, '')
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime
    },
  },
  actions: {
    setToken(token: string | undefined) {
      this.token = token || ''
      Storage.set(ACCESS_TOKEN, token)
    },
    setOpenId(openId: string | undefined) {
      this.openId = openId || ''
      Storage.set(USER_OPEN_ID, openId)
    },
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info
      this.lastUpdateTime = new Date().getTime()
      Storage.set(CURRENT_USER, info)
    },

    async Login(params: LoginParams) {
      try {
        const response = await login(params)
        const {data, code} = response
        if (code === ResultEnum.SUCCESS) {
          // save token
          this.setToken(data.token);
          this.setOpenId(data.openId);
        }
        return Promise.resolve(response)
      } catch (error) {
        return Promise.reject(error)
      }
    },

    async GetUserInfo() {
      // return new Promise((resolve, reject) => {
      //   getUserInfo()
      //     .then((res) => {
      //       this.setUserInfo(res)
      //       resolve(res)
      //     })
      //     .catch((error) => {
      //       reject(error)
      //     })
      // })
    },

    async Logout() {
      if (this.getToken) {
        try {
          await doLogout()
        } catch {
          console.error('注销Token失败')
        }
      }
      this.setToken(undefined)
      this.setOpenId(undefined)
      this.setUserInfo(null)
      Storage.remove(ACCESS_TOKEN)
      Storage.remove(USER_OPEN_ID)
      Storage.remove(CURRENT_USER)
      router.push(PageEnum.BASE_LOGIN)
      location.reload()
    },
  },
})

// Need to be used outside the setup
export function useUserStoreWidthOut() {
  return useUserStore(store)
}
