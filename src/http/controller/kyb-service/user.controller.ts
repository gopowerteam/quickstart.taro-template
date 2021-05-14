/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '@gopowerteam/http-request'

// 控制器名称
const controller = 'user'
const service = 'xbt-platform-kyb-service'

export const UserController = {
    // 添加患者信息绑定
    addPatient: {
        service,
        controller,
        path: '/api/user/addPatient',
        action: 'addPatient',
        type: RequestMethod.Post
    },
    // 修改用户可编辑项目
    changProfile: {
        service,
        controller,
        path: '/api/user/changProfile',
        action: 'changProfile',
        type: RequestMethod.Post
    },
    // 使用ID查询
    getById: {
        service,
        controller,
        path: '/api/user/getById/{id}',
        action: 'getById',
        type: RequestMethod.Get
    },
    // 获取当前登录用户信息
    getMineUser: {
        service,
        controller,
        path: '/api/user/getMineUser',
        action: 'getMineUser',
        type: RequestMethod.Get
    },
    // 使用UnionId登录
    loginByUnionId: {
        service,
        controller,
        path: '/api/user/loginByUnionId',
        action: 'loginByUnionId',
        type: RequestMethod.Post
    },
    // 发送绑定验证码
    sendBindingVerificationCode: {
        service,
        controller,
        path: '/api/user/sendBindingVerificationCode',
        action: 'sendBindingVerificationCode',
        type: RequestMethod.Post
    },
    // 验证手机号/验证码
    verificationBindingCode: {
        service,
        controller,
        path: '/api/user/verificationBindingCode',
        action: 'verificationBindingCode',
        type: RequestMethod.Post
    }
}
