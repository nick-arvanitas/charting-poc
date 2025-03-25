import { Component } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from 'ag-charts-enterprise';

@Component({
  selector: 'ag-scatter',
  imports: [AgCharts],
  template: `
  <ag-charts class="block"
        [options]="options"
    ></ag-charts>
  `,
})
export class AgScatterComponent {
  options: AgChartOptions = {
    padding: {
      left: 0,
      right: 0,
      top: 8,
      bottom: 0
    },
    
    data: [
      {
        height: 174,
        weight: 65.6,
        age: 21,
      },
      {
        height: 175.3,
        weight: 71.8,
        age: 23,
      },
      {
        height: 193.5,
        weight: 80.7,
        age: 28,
      },
      {
        height: 186.5,
        weight: 72.6,
        age: 23,
      },
      {
        height: 187.2,
        weight: 78.8,
        age: 22,
      },
      {
        height: 181.5,
        weight: 74.8,
        age: 21,
      },
      {
        height: 184,
        weight: 86.4,
        age: 26,
      },
      {
        height: 184.5,
        weight: 78.4,
        age: 27,
      },
      {
        height: 175,
        weight: 62,
        age: 23,
      },
      {
        height: 184,
        weight: 81.6,
        age: 21,
      },
      {
        height: 180,
        weight: 76.6,
        age: 23,
      },
      {
        height: 177.8,
        weight: 83.6,
        age: 22,
      },
      {
        height: 192,
        weight: 90,
        age: 20,
      },
      {
        height: 176,
        weight: 74.6,
        age: 26,
      },
      {
        height: 174,
        weight: 71,
        age: 23,
      },
      {
        height: 184,
        weight: 79.6,
        age: 22,
      },
      {
        height: 192.7,
        weight: 93.8,
        age: 30,
      },
      {
        height: 171.5,
        weight: 70,
        age: 22,
      },
      {
        height: 173,
        weight: 72.4,
        age: 29,
      },
      {
        height: 176,
        weight: 85.9,
        age: 22,
      },
      {
        height: 176,
        weight: 78.8,
        age: 22,
      },
      {
        height: 180.5,
        weight: 77.8,
        age: 20,
      },
      {
        height: 172.7,
        weight: 66.2,
        age: 22,
      },
      {
        height: 176,
        weight: 86.4,
        age: 24,
      },
      {
        height: 173.5,
        weight: 81.8,
        age: 26,
      },
      {
        height: 178,
        weight: 89.6,
        age: 24,
      },
      {
        height: 180.3,
        weight: 82.8,
        age: 21,
      },
      {
        height: 180.3,
        weight: 76.4,
        age: 24,
      },
      {
        height: 164.5,
        weight: 63.2,
        age: 23,
      },
      {
        height: 173,
        weight: 60.9,
        age: 19,
      },
      {
        height: 183.5,
        weight: 74.8,
        age: 23,
      },
      {
        height: 175.5,
        weight: 70,
        age: 25,
      },
      {
        height: 188,
        weight: 72.4,
        age: 23,
      },
      {
        height: 189.2,
        weight: 84.1,
        age: 23,
      },
      {
        height: 172.8,
        weight: 69.1,
        age: 23,
      },
      {
        height: 170,
        weight: 59.5,
        age: 20,
      },
      {
        height: 182,
        weight: 67.2,
        age: 22,
      },
      {
        height: 170,
        weight: 61.3,
        age: 24,
      },
      {
        height: 177.8,
        weight: 68.6,
        age: 22,
      },
      {
        height: 184.2,
        weight: 80.1,
        age: 24,
      },
      {
        height: 186.7,
        weight: 87.8,
        age: 21,
      },
      {
        height: 171.4,
        weight: 84.7,
        age: 23,
      },
      {
        height: 172.7,
        weight: 73.4,
        age: 24,
      },
      {
        height: 175.3,
        weight: 72.1,
        age: 35,
      },
      {
        height: 180.3,
        weight: 82.6,
        age: 29,
      },
      {
        height: 182.9,
        weight: 88.7,
        age: 25,
      },
      {
        height: 188,
        weight: 84.1,
        age: 23,
      },
      {
        height: 177.2,
        weight: 94.1,
        age: 20,
      },
      {
        height: 172.1,
        weight: 74.9,
        age: 25,
      },
      {
        height: 167,
        weight: 59.1,
        age: 29,
      },
      {
        height: 169.5,
        weight: 75.6,
        age: 23,
      },
      {
        height: 174,
        weight: 86.2,
        age: 23,
      },
      {
        height: 172.7,
        weight: 75.3,
        age: 36,
      },
      {
        height: 182.2,
        weight: 87.1,
        age: 25,
      },
      {
        height: 164.1,
        weight: 55.2,
        age: 24,
      },
      {
        height: 163,
        weight: 57,
        age: 20,
      },
      {
        height: 171.5,
        weight: 61.4,
        age: 52,
      },
      {
        height: 184.2,
        weight: 76.8,
        age: 50,
      },
      {
        height: 174,
        weight: 86.8,
        age: 46,
      },
      {
        height: 174,
        weight: 72.2,
        age: 51,
      },
      {
        height: 177,
        weight: 71.6,
        age: 28,
      },
    ],
    series: [
      {
          type: 'scatter',
          xKey: 'height',
          xName: 'Height',
          yKey: 'weight',
          yName: 'Weight',
      },
  ],
  };
}
