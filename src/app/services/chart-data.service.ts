import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { SalesPerformance } from '../types/sales-performance'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/take'

@Injectable()
export class ChartDataService {
  private request
  constructor(private http: Http) {}

  getEmployeePerformance (): Observable<Array<SalesPerformance>> {
    return this.request = this.http.get('../assets/company-data.json')
      .take(1)
      .map( result => result.json())
      // .merge(
      //   Observable.interval(1000)
      //     .switchMap(() => this.request)
      // )
  }
  getWeeklyStats(): Observable<{ labels: string[], series: number[] }> {
    return this.request = this.http.get('../assets/stats-data.json')
      .take(1)
      .map( result => result.json())
      // .merge(
      //   Observable.interval(1000)
      //     .switchMap(() => this.request)
      // )
  }

}
