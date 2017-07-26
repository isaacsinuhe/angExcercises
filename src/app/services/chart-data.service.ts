import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { SalesPerformance } from '../types/sales-performance'

import * as Highcharts from 'highcharts'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/take'

@Injectable()
export class ChartDataService {
  private request
  
  constructor(private http: Http) {
    Highcharts.getOptions().plotOptions.pie.colors = (function () {
      const colors = [],
        base = '#e6e6e6'

      for (let i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color(base).get())
          // .brighten((i - 3) / 7).get()
      }
      return colors;
    }());
  }

  getEmployeePerformance (): Observable<Array<SalesPerformance>> {
    return this.http.get('../assets/company-data.json')
      .take(1)
      .map( result => result.json())
  }
  getWeeklyStats(): Observable<{ labels: string[], series: number[] }> {
    return this.http.get('../assets/stats-data.json')
      .take(1)
      .map( result => result.json())
  }
  getMonthlyStats(): Observable<any> {
    return this.http.get('../assets/stats-data-month.json')
      .take(1)
      .map( result => result.json())
  }
  getGlobalSales(): Observable<any> {
    return this.http.get('../assets/sales.json')
      .take(1)
      .map( result => result.json())
  }


}
