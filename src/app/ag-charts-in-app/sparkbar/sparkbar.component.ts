import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions, AgBarSeriesOptions, AgNumberAxisOptions } from 'ag-charts-enterprise';
@Component({
  selector: 'sparkbar',
  standalone: true,
  imports: [AgCharts],
  template: `
    <ag-charts
      [options]="options"
      class="block w-full h-8 *:w-full! *:h-8!"
    ></ag-charts>
  `
})
export class SparkBar {
  public options: AgChartOptions = {
    data: Array.from({ length: 8 }, (_, i) => ({
      date: new Date(2024, 0, i + 1).toISOString().split('T')[0],
      value: Math.floor(Math.random() * 10) + 1
    })),
    series: [{
      type: 'bar',
      xKey: 'date',
      yKey: 'value',
      stroke: '#2196F3',
      strokeWidth: 2,
      showInMiniChart: true,
    }] as AgBarSeriesOptions[],
    padding: {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1
    },
    axes: [
      {
        type: 'category',
        position: 'bottom',
        gridLine: { enabled: false },
        label: { enabled: false },
        tick: {
          enabled: false
        },
        crosshair: {
          enabled: false
        },
        line: {
          enabled: false
        }
      },
      {
        type: 'number',
        position: 'left',
        gridLine: { enabled: false },
        label: { enabled: false },
        tick: {
          enabled: false
        },
        crosshair: {
          enabled: false
        }
      }
    ] as any[]
  };
}
