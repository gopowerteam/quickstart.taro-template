/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '@gopowerteam/http-request'

// 控制器名称
const controller = 'auth'
const service = 'xbt-platform-dingtalk-service'

export const AuthController = {
    // 获取AccessToken
    getAccessToken: {
        service,
        controller,
        path: '/api/auth/getAccessToken/{agentId}',
        action: 'getAccessToken',
        type: RequestMethod.Get
    },
    // unionId换取UserId
    getUserIdByUnionId: {
        service,
        controller,
        path: '/api/auth/getUserIdByUnionId/{agentId}/{unionId}',
        action: 'getUserIdByUnionId',
        type: RequestMethod.Get
    },
    // 钉钉AuthCode登录
    loginByCode: {
        service,
        controller,
        path: '/api/auth/loginByAuthCode/{agentId}/{code}',
        action: 'loginByCode',
        type: RequestMethod.Get
    },
    // 钉钉SNS扫码登录
    loginBySnsCode: {
        service,
        controller,
        path: '/api/auth/loginBySnsCode/{agentId}/{code}',
        action: 'loginBySnsCode',
        type: RequestMethod.Get
    }
}
