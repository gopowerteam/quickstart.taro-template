/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '@gopowerteam/http-request'

// 控制器名称
const controller = 'rule'
const service = 'xbt-platform-salary-service'

export const RuleController = {
    // create
    create: {
        service,
        controller,
        path: '/api/rule/create',
        action: 'create',
        type: RequestMethod.Post
    },
    // delete
    delete: {
        service,
        controller,
        path: '/api/rule/delete/{id}',
        action: 'delete',
        type: RequestMethod.Delete
    },
    // get All
    getAll: {
        service,
        controller,
        path: '/api/rule/getAll',
        action: 'getAll',
        type: RequestMethod.Get
    },
    // findOne
    get: {
        service,
        controller,
        path: '/api/rule/getById/{id}',
        action: 'get',
        type: RequestMethod.Get
    },
    // get List
    getList: {
        service,
        controller,
        path: '/api/rule/getList',
        action: 'getList',
        type: RequestMethod.Get
    },
    // update
    update: {
        service,
        controller,
        path: '/api/rule/update',
        action: 'update',
        type: RequestMethod.Post
    }
}
