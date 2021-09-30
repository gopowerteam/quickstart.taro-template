/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import type { Observable } from 'rxjs'
import { COSControllerController } from '../../controller/kyb-service/c-o-s-controller.controller'

export class COSControllerService {
    /**
     * 创建临时Secret
     */
    @Request({
        server: COSControllerController.createTempSecret
    })
    public createTempSecret(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 创建临时上传链接
     */
    @Request({
        server: COSControllerController.createUploadUrl
    })
    public createUploadUrl(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
