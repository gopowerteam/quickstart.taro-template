/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import type { Observable } from 'rxjs'
import { MedicalNeedController } from '../../controller/kyb-service/medical-need.controller'

export class MedicalNeedService {
    /**
     * 创建
     */
    @Request({
        server: MedicalNeedController.create
    })
    public create(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 删除
     */
    @Request({
        server: MedicalNeedController.delete
    })
    public delete(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 查询全部
     */
    @Request({
        server: MedicalNeedController.getAll
    })
    public getAll(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 使用ID查询
     */
    @Request({
        server: MedicalNeedController.getById
    })
    public getById(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 分页查询
     */
    @Request({
        server: MedicalNeedController.query
    })
    public query(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 更新
     */
    @Request({
        server: MedicalNeedController.update
    })
    public update(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
