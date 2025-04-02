import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions, AgLineSeriesOptions, AgNumberAxisOptions } from 'ag-charts-enterprise';
import { createCategoricalCoolTheme } from '../../../../agtheme';
@Component({
  selector: 'sparkline',
  standalone: true,
  imports: [AgCharts],
  template: `
    <ag-charts
      [options]="options"
      class="block w-full h-8 *:w-full! *:h-8!"
    ></ag-charts>
  `
})
export class SparklineComponent {
  public options: AgChartOptions = {
    theme: createCategoricalCoolTheme([3]),
    data: Array.from({ length: 8 }, (_, i) => ({
      date: new Date(2024, 0, i + 1).toISOString().split('T')[0],
      value: Math.floor(Math.random() * 10) + 1
    })),
    series: [{
      type: 'line',
      xKey: 'date',
      yKey: 'value',
      marker: {
        enabled: false
      },
      showInMiniChart: true,
    }] as AgLineSeriesOptions[],
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
    ] as AgNumberAxisOptions[]
  };
}
