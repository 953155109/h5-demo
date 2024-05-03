import { http } from "@/utils/http/axios";

export interface BasicResponseModel<T = any> {
  code: number;
  message: string;
  data: T;
}

/**
 * @description: 用户登录
 */
export function getSmsCode(params: any) {
  return http.request<BasicResponseModel>(
    {
      url: "/sms/getCode",
      method: "GET",
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * @description: 获取用户信息
 */
export function getUserInfo() {
  return http.request({
    url: "/getUserInfo",
    method: "get",
  });
}

/**
 * @description: 用户登出
 */
export function doLogout() {
  return http.request({
    url: "/logout",
    method: "POST",
  });
}

/**
 * @description: 用户修改密码
 */
export function changePassword(params: any, uid: any) {
  return http.request(
    {
      url: `/user/u${uid}/changepw`,
      method: "POST",
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: 获取流程信息
 */
export function getflowStatus(params: any) {
  return http.request(
    {
      url: `/workflow/queryWorkflowStatus`,
      method: "POST",
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * @description: 表单请求
 */
export function Postform(params: any) {
  return http.request(
    {
      url: `/workflow/order`,
      method: "POST",
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * @description: 获取订单信息
 */
export function getOrder(params: any, headers: any) {
  return http.request(
    {
      headers: {
        tempToken: headers.tempToken,
        customerPhone: headers.customerPhone,
      },
      url: `/order/queryOrder`,
      method: "POST",
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * @description: 获取微信支付信息
 */
export function getWxpay(params: any) {
  return http.request(
    {
      url: `/wxPay/prepay`,
      method: "POST",
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

export function getWxOpenId(params: any) {
  return http.request(
    {
      url: `/wx/getOpenId`,
      method: "POST",
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

export function getPayStatus(params: any) {
  return http.request(
    {
      url: `/wxPay/callBack`,
      method: "POST",
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
