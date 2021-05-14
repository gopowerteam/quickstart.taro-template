/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import { Observable } from 'rxjs'
import { BasicController } from '../../controller/salary-service/basic.controller'

export class BasicService {
    /**
     * create
     */
    @Request({
        server: BasicController.create
    })
    public create(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * get All
     */
    @Request({
        server: BasicController.getAll
    })
    public getAll(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
