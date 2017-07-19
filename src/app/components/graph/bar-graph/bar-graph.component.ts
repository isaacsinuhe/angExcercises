import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { SalesPerformance } from '../../../types/sales-performance'

import 'rxjs/add/operator/map'
import * as d3 from 'd3'


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit, OnChanges {
  @Input() range
  @Input() margin = { top: 20, right: 20, bottom: 30, left: 40 }
  @Input() width = 960
  @Input() height = 500
  @Input() xProp = 'x-axis'
  @Input() yProp = 'y-axis'
  @Input() xTag = this.xProp
  @Input() yTag = this.yProp
  @Input() data: Observable<SalesPerformance[]>

  public x: d3.ScaleBand<string>
  public y: d3.ScaleLinear<number, number>

  constructor() {}

  ngOnChanges () {}

  ngOnInit() {
    this.width = this.width - this.margin.left - this.margin.right
    this.height = this.height - this.margin.top - this.margin.bottom

    // set the ranges
    this.x = d3.scaleBand()
      .rangeRound([0, this.width])
      .padding(0.1)
    this.y = d3.scaleLinear()
      .range([this.height, 0])

    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    const svg = d3.select('app-bar-graph')
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)

    function handleData ( data ) {

    }
    // get the data
    d3.csv( 'assets/sales.csv', (error, data: d3.DSVParsedArray<d3.DSVRowAny>) => {
      if (error) throw error

      // format the data
      data.forEach( (d) => {
        d[this.yProp] = +d[this.yProp];
      });

      // Scale the range of the data in the domains
      this.x.domain(data.map( d => d[this.xProp] ));
      this.y.domain([0, d3.max(data, d => d[this.yProp] )]);

      // append the rectangles for the bar chart
      svg.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => this.x(d[this.xProp]))
        // .attr('x', (d) => this.x(d.salesperson))
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

      svg.append('text')
        .attr('transform',
        `translate(${-(5 + this.margin.left / 2)}, ${this.height / 2})
        rotate(270)`)
        .style('font-size', '10px')
        .text(this.yTag)

      svg.append('text')
        .attr('transform',
        `translate(${this.width / 2}, ${this.height + this.margin.bottom} )`)
        .style('font-size', '10px')
        .text(this.xTag)
    })

  }
}

