import { Component, OnInit, OnChanges, AfterViewInit, DoCheck } from '@angular/core';
import { ChartDataService } from '../../services/chart-data.service'
import { Observable } from 'rxjs/Observable'
import { SalesPerformance } from '../../types/sales-performance'

import 'rxjs/add/observable/from'
import 'rxjs/add/operator/switchMap'


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  private selection: string
  private barData: SalesPerformance[]
  private lineData: { labels: string[], series: number[] }
  private pieData: any

  constructor(private chartData: ChartDataService) { }

  ngOnInit () {
    this.selection = 'bar'
    this.chartData
      .getEmployeePerformance()
      .subscribe(v => { this.barData = v} )
      // .switchMap(file => Observable.from(file))
      
    this.chartData
      .getWeeklyStats()
      .subscribe(v => { this.lineData = v } )

    this.chartData
      .getMonthlyStats()
      .subscribe(v => { this.pieData = v } )

  }
}
