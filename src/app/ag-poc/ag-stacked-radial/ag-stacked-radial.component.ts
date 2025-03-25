import { Component } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from 'ag-charts-enterprise';

@Component({
  selector: 'ag-stacked-radial',
  imports: [AgCharts],
  template: `
  <ag-charts class="block"
        [options]="options"
    ></ag-charts>
  `,
})
export class AgStackedRadialComponent {
  options: AgChartOptions = {
    padding: {
      left: 0,
      right: 0,
      top: 8,
      bottom: 0
    },
    
    data: [
      {
        quarter: `Q1'23`,
        software: 3.35,
        hardware: 3.14,
        services: 3.91,
      },
      {
        quarter: `Q2'23`,
        software: 3.28,
        hardware: 3.13,
        services: 3.54,
      },
      {
        quarter: `Q3'23`,
        software: 3.14,
        hardware: 2.84,
        services: 3.18,
      },
      {
        quarter: `Q4'23`,
        software: 2.48,
        hardware: 2.46,
        services: 3.21,
      },
    ],
    series: [
      { type: 'radial-bar', radiusKey: 'quarter', angleKey: 'software', stacked: true },
      { type: 'radial-bar', radiusKey: 'quarter', angleKey: 'hardware', stacked: true },
      { type: 'radial-bar', radiusKey: 'quarter', angleKey: 'services', stacked: true },
  ],
  };
}
