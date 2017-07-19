import { Component, OnInit, OnChanges } from '@angular/core';
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
  private data: Observable<any>
  constructor(private chartData: ChartDataService) { }

  ngOnInit () {
    this.data = this.chartData
      .getEmployeePerformance()
      .switchMap(file => Observable.from(file))
  }
}
