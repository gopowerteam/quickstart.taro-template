/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import type { Observable } from 'rxjs'
import { ProcessInstanceController } from '../../controller/dingtalk-service/process-instance.controller'

export class ProcessInstanceService {
    /**
     * 创建流程实例
     */
    @Request({
        server: ProcessInstanceController.processInstanceCreate
    })
    public processInstanceCreate(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
