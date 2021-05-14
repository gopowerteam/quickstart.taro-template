/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import { Observable } from 'rxjs'
import { CallbackController } from '../../controller/dingtalk-service/callback.controller'

export class CallbackService {
    /**
     * callback
     */
    @Request({
        server: CallbackController.callback
    })
    public callback(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
