import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { SalesPerformance } from '../types/sales-performance'

import 'rxjs/add/operator/map'

@Injectable()
export class ChartDataService {

  constructor(private http: Http) {}

  getEmployeePerformance (): Observable<Array<SalesPerformance>> {
    return this.http.get('../assets/company-data.json')
      .map( result => result.json())
  }

}
