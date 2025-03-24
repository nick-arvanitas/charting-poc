import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  template: `<div #chart></div>
`,
})
export class D3Component implements OnInit {

  @ViewChild('chart', { static: true }) private chartContainer: ElementRef | undefined;

  // Sample data for the line chart
  private data: any = [
    { date: '2020-01-01', value: 30 },
    { date: '2020-01-02', value: 40 },
    { date: '2020-01-03', value: 45 },
    { date: '2020-01-04', value: 60 },
    { date: '2020-01-05', value: 70 },
    { date: '2020-01-06', value: 90 },
  ];

  private margin = { top: 20, right: 30, bottom: 40, left: 40 };
  private width = 800 - this.margin.left - this.margin.right;
  private height = 400 - this.margin.top - this.margin.bottom;

  constructor() {}

  ngOnInit(): void {
    this.createLineChart();
  }

  private createLineChart(): void {
    const element = this.chartContainer?.nativeElement;

    // Parse the date
    const parseDate = d3.timeParse('%Y-%m-%d');
    this.data.forEach((d: { date: string; }) => d.date = parseDate(d.date) as any);

    // Set the scales
    const x = d3.scaleTime().range([0, this.width]);
    const y = d3.scaleLinear().range([this.height, 0]);

    // Define the line
    const line = d3.line()
      .x((d: any) => x(d.date))
      .y((d: any) => y(d.value));

    // Set the domains for the axes
    x.domain(d3.extent(this.data, (d: any) => d.date) as any);
    y.domain([0, d3.max(this.data, (d: any) => d.value)] as any);

    // Create the SVG container
    const svg = d3.select(element)
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    // Add the line path
    svg.append('path')
      .data([this.data])
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#42a5f5')
      .attr('stroke-width', );

    // Add X-axis
    svg.append('g')
      .attr('transform', `translate(0,${this.height})`)
      .call(d3.axisBottom(x));

    // Add Y-axis
    svg.append('g')
      .call(d3.axisLeft(y));
  }

}
