/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '@gopowerteam/http-request'

// 控制器名称
const controller = 'attendance'
const service = 'xbt-platform-dingtalk-service'

export const AttendanceController = {
    // 获取考勤统计列定义
    getAttendanceAttColumns: {
        service,
        controller,
        path: '/api/attendance/getAttendanceAttColumns',
        action: 'getAttendanceAttColumns',
        type: RequestMethod.Get
    },
    // 获取考勤统计记录
    queryAttendanceStatistics: {
        service,
        controller,
        path: '/api/attendance/queryAttendanceStatistics',
        action: 'queryAttendanceStatistics',
        type: RequestMethod.Get
    },
    // 同步考勤统计列定义
    syncAttendanceAttColumns: {
        service,
        controller,
        path: '/api/attendance/syncAttendanceAttColumns',
        action: 'syncAttendanceAttColumns',
        type: RequestMethod.Post
    }
}
