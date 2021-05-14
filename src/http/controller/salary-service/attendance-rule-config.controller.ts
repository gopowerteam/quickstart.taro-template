/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '@gopowerteam/http-request'

// 控制器名称
const controller = 'attendance-rule-config'
const service = 'xbt-platform-salary-service'

export const AttendanceRuleConfigController = {
    // 查询全部
    getAll: {
        service,
        controller,
        path: '/api/attendanceRuleConfig/getAll',
        action: 'getAll',
        type: RequestMethod.Get
    },
    // 使用ID查询
    getById: {
        service,
        controller,
        path: '/api/attendanceRuleConfig/getById/{id}',
        action: 'getById',
        type: RequestMethod.Get
    },
    // 更新
    update: {
        service,
        controller,
        path: '/api/attendanceRuleConfig/update/{id}',
        action: 'update',
        type: RequestMethod.Post
    }
}
