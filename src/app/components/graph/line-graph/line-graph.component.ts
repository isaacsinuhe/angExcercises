import { Component, OnInit, OnChanges, Input, AfterViewInit } from '@angular/core';
import * as Chartist from 'chartist'


@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {
  @Input() title: string
  @Input() height: number
  @Input() width: number
  @Input() data: {labels: string[], series: number[]}
  private chart: Chartist.IChartistLineChart

  constructor () { }

  addToSet (stat) {
    this.data.series.push(stat)
    this.chart.update(this.data)
  }

  ngOnInit () {
    this.chart = new Chartist.Line(
      '.ct-chart', 
      this.data, 
      {
        low: 0,
        width: this.width,
        height: this.height,
        showArea: true,
        showLine: true,
        showPoint: true,
        fullWidth: false,
        lineSmooth: Chartist.Interpolation.simple()
      }
    )
    
    this.chart.on('draw', (data) => {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        })
      }
    })
  }
}
