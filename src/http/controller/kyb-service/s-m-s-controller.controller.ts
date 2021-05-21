/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '@gopowerteam/http-request'

// 控制器名称
const controller = 's-m-s-controller'
const service = 'xbt-platform-kyb-service'

export const SMSControllerController = {
    // 发送一个后台不验证的验证码
    orderRefund: {
        service,
        controller,
        path: '/api/SMSController/sendSMSCode/{phone}',
        action: 'orderRefund',
        type: RequestMethod.Post
    }
}