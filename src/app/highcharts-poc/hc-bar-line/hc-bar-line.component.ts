import { Component } from '@angular/core';
import * as Highcharts from 'highcharts'
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'hc-bar-line',
  imports: [HighchartsChartModule],
  template: `
<highcharts-chart
  [Highcharts]="Highcharts"
  [options]="chartOptions"
  class="w-full block"
></highcharts-chart>
  `,
})
export class HcBarLineComponent {
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = {
  chart: {
    spacing: [8,0,0,2],
  },
  title: {
      text: '',
  },
  credits: {
      text: ''
  },
  xAxis: [{
      categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      crosshair: true
  }],
  yAxis: [{ // Primary yAxis
      labels: {
          format: '{value}°C',
      },
      title: {
          text: 'Temperature',
      }
  }, { // Secondary yAxis
      title: {
          text: 'Precipitation',
      },
      labels: {
          format: '{value} mm',
      },
      opposite: true
  }],
  tooltip: {
      shared: false
  },
  series: [{
      name: 'Precipitation',
      type: 'column',
      yAxis: 1,
      data: [
          45.7, 37.0, 28.9, 17.1, 39.2, 18.9, 90.2, 78.5, 74.6,
          18.7, 17.1, 16.0
      ],
      tooltip: {
          valueSuffix: ' mm'
      }

  }, {
      name: 'Temperature',
      type: 'spline',
      data: [
          -11.4, -9.5, -14.2, 0.2, 7.0, 12.1, 13.5, 13.6, 8.2,
          -2.8, -12.0, -15.5
      ],
      tooltip: {
          valueSuffix: '°C'
      }
  }]
    
  }
}
