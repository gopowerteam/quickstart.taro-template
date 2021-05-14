/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '@gopowerteam/http-request'

// 控制器名称
const controller = 'message'
const service = 'xbt-platform-dingtalk-service'

export const MessageController = {
    // 发送卡片消息 用这个消息好像好一点
    sendCardMessage: {
        service,
        controller,
        path: '/api/message/sendCardMessage/{agentId}',
        action: 'sendCardMessage',
        type: RequestMethod.Post
    },
    // 发送超链接消息
    sendLinkMessage: {
        service,
        controller,
        path: '/api/message/sendLinkMessage/{agentId}',
        action: 'sendLinkMessage',
        type: RequestMethod.Post
    }
}
