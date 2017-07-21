import { EventEmitter, Component, OnInit, Input, DoCheck, OnChanges} from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { SalesPerformance } from '../../../types/sales-performance'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/finally'
import * as d3 from 'd3'


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnChanges {
  @Input() range
  @Input() margin = { top: 20, right: 20, bottom: 30, left: 40 }
  @Input() width = 960
  @Input() height = 500
  @Input() title = 'title'
  @Input() xProp = 'x-axis'
  @Input() yProp = 'y-axis'
  @Input() data: SalesPerformance[]
  @Input() dataChange: EventEmitter<SalesPerformance[]> = new EventEmitter


  public x: d3.ScaleBand<string>
  public y: d3.ScaleLinear<number, number>

  constructor() {}

  addToSet (sale) {
    this.data.push(sale)///
    this.dataChange.emit(this.data)
    this.renderChart(this.data)
  }

  ngOnChanges() {
    this.width = this.width - this.margin.left - this.margin.right
    this.height = this.height - this.margin.top - this.margin.bottom
    this.x = d3.scaleBand()
      .rangeRound([0, this.width])
      .padding(0.2)
    this.y = d3.scaleLinear()
      .range([this.height, 0])
    this.renderChart(this.data)
  }

  renderChart (data) {
    
    d3.select('svg').remove()
    const svg = d3.select('.chart')
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left}, 10)`)
      
    data.forEach((d) => { d[this.yProp] = +d[this.yProp] })

    // Scale the range of the data in the domains
    this.x.domain(data.map(d => d[this.xProp]));
    this.y.domain([0, d3.max(data, d => d[this.yProp])]);

    // append the rectangles for the bar chart
    const bar = svg.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => this.x(d[this.xProp]))
      .attr('width', this.x.bandwidth())
      .attr('y', (d) => this.y(d[this.yProp]))
      .attr('height', (d) => this.height - this.y(d[this.yProp]))

    // add the x Axis
    svg.append('g')
      .attr('transform', `translate(0, ${this.height} )`)
      .call(d3.axisBottom(this.x));

    // add the y Axis
    svg.append('g')
      .call(d3.axisLeft(this.y))
  }
}

