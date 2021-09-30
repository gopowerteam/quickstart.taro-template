/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import type { Observable } from 'rxjs'
import { PosterController } from '../../controller/kyb-service/poster.controller'

export class PosterService {
    /**
     * 创建
     */
    @Request({
        server: PosterController.create
    })
    public create(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 删除
     */
    @Request({
        server: PosterController.delete
    })
    public delete(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 查询全部
     */
    @Request({
        server: PosterController.getAll
    })
    public getAll(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 使用ID查询
     */
    @Request({
        server: PosterController.getById
    })
    public getById(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 获取海报详情
     */
    @Request({
        server: PosterController.getPoster
    })
    public getPoster(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 分页查询
     */
    @Request({
        server: PosterController.query
    })
    public query(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 更新
     */
    @Request({
        server: PosterController.update
    })
    public update(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
