import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions, AgBarSeriesOptions, AgNumberAxisOptions } from 'ag-charts-enterprise';
@Component({
  selector: 'sparkbar-h',
  standalone: true,
  imports: [AgCharts],
  template: `
    <ag-charts
      [options]="options"
      class="block w-full h-8 *:w-full! *:h-8!"
    ></ag-charts>
  `
})
export class SparkBarH {
  public options: AgChartOptions = {
    data: [
      {
        quarter: "Q1'18",
        iphone: 140,
        mac: 16,
        ipad: 14,
        wearables: 12,
        services: 20,
      },
      {
        quarter: "Q2'18",
        iphone: 124,
        mac: 20,
        ipad: 14,
        wearables: 12,
        services: 30,
      },
    ],
    series: [
      {
        type: "bar",
        direction: "horizontal",
        xKey: "quarter",
        yKey: "iphone",
        yName: "iPhone",
      }] as AgBarSeriesOptions[],
    padding: {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1
    },
    axes: [
      {
        type: 'number',
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
        type: 'category',
        position: 'left',
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
      }
    ] as any[]
  };
}
