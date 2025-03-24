import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'hc-line',
  imports: [HighchartsChartModule],
  template: `
<highcharts-chart
  [Highcharts]="Highcharts"
  [options]="chartOptions"
  class="w-full block"
></highcharts-chart>
  `,
})
export class HcLineComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      spacing: [8,0,0,2],
      height: 300,
    },
    credits: {
      text: ''
  },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Q1', 'Q2', 'Q3', 'Q4'],
      lineColor: '#f1f1f1', // Change to any color (hex, RGB, or color name)

      title: {
        text: ''
      },
      tickLength: 0,
      labels: {
        y: 15
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      tickInterval: 100,
      endOnTick: false,
      startOnTick: false,  
      min: 100
    },
    series: [
      {
        type: 'line',
        name: 'Petrol',
        data: [200, 300, 350, 400],
        color: '#FF5733', // Optional: petrol line color
      },
      {
        type: 'line',
        name: 'Diesel',
        data: [100, 130, 160, 200],
        color: '#3498DB' // Optional: diesel line color
      }
    ],
    tooltip: {
      shared: true,
      valueSuffix: ' units'
    }
  }
}
