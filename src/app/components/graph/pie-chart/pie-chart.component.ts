import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() data: any
  @Input() width: number
  @Input() height: number
  @Input() title: string
  private chart: Highcharts

  constructor () {}

  addToSet (stat) {
    this.chart.series[0].addPoint(stat)
    // this.chart.series[0].setData([this.data])
    // this.chart.redraw()
  }

  ngOnChanges () { }

  ngOnInit () {
    this.chart = Highcharts.chart('pie-chart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          borderColor: '#f4c63d',
          borderWidth: '4px',
          
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [ this.data ]
    })
  }
}
