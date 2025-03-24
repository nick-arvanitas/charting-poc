import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'hc-bar',
  imports: [HighchartsChartModule],
  template: `
  <highcharts-chart
    [Highcharts]="Highcharts"
    [options]="chartOptions"
    class="block w-full"
  ></highcharts-chart>
  `,
})
export class HcBarComponent {
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
        spacing: [8,0,0,2],
        height: 300
    },
    credits: {
      text: ''
  },
    title: {
      text: ''
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
    yAxis: {
      title: {
        text: null
      },
      tickInterval: 50,
    },
    xAxis: {
      lineColor: '#f1f1f1', // Change to any color (hex, RGB, or color name)
      tickLength: 0,
      labels: {
        y: 15
      }
    },
    series: [
      { name: 'iphone', data: [140, 124, 112, 118] },
      { name: 'mac', data: [16, 20, 20, 24] },
      { name: 'ipad', data: [14, 14, 18, 14] },
      { name: 'wearables', data: [12, 12, 14, 14] },
      { name: 'services', data: [20, 30, 36, 36] }
    ] as Highcharts.SeriesColumnOptions[]
    
  }
}
