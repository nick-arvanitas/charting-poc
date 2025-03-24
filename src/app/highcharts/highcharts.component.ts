import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-highcharts',
  imports: [HighchartsChartModule],
  template: `
  <highcharts-chart
    [Highcharts]="Highcharts"
    [options]="chartOptions"
    [runOutsideAngular]="true"
    
    class="block w-full h-[400px]"
  ></highcharts-chart>
  <div class="flex flex-col gap-y-2 p-4">
      <div class="text-3xl">Notes</div>
      <div class="text-sm text-gray-700">Has a component with typing</div>
      <div class="text-sm text-gray-700">HMR Works</div>
      <div class="text-sm text-gray-700">124k Weekly downloads</div>
      <div class="text-sm text-gray-700">Last published 7 months ago</div>
  </div>
  `
})
export class HighchartsComponent {
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016'
    },
    chart: {
      type: 'bar',
        inverted: true,
    },
    subtitle: {
      text: 'Source: thesolarfoundation.com'
    },
    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
    series: [{
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    } as Highcharts.SeriesBarOptions],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }
}
