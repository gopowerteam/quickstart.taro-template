/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import { Observable } from 'rxjs'
import { SalaryvalueController } from '../../controller/salary-service/salaryvalue.controller'

export class SalaryvalueService {
    /**
     * calculation by employee
     */
    @Request({
        server: SalaryvalueController.calcByEmployee
    })
    public calcByEmployee(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * calculation by id
     */
    @Request({
        server: SalaryvalueController.calcById
    })
    public calcById(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * create for employee
     */
    @Request({
        server: SalaryvalueController.create
    })
    public create(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 核算列表
     */
    @Request({
        server: SalaryvalueController.getAll
    })
    public getAll(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * findOne
     */
    @Request({
        server: SalaryvalueController.getByEmployee
    })
    public getByEmployee(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * findOne
     */
    @Request({
        server: SalaryvalueController.get
    })
    public get(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 我的月份工资
     */
    @Request({
        server: SalaryvalueController.mySalary
    })
    public mySalary(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 我的工资列表
     */
    @Request({
        server: SalaryvalueController.mySalaryList
    })
    public mySalaryList(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * update
     */
    @Request({
        server: SalaryvalueController.update
    })
    public update(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}