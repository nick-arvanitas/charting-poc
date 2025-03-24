import { Component } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from 'ag-charts-enterprise';


@Component({
  selector: 'ag-line',
  imports: [AgCharts],
  template: `
  <ag-charts class="block"
        [options]="options"
    ></ag-charts>
  `,
})
export class AgLineComponent {
  options: AgChartOptions = {
    padding: {
      left: 0,
      right: 0,
      top: 8,
      bottom: 0
    },
    
    data: [
      {
        quarter: "Q1",
        petrol: 200,
        diesel: 100,
      },
      {
        quarter: "Q2",
        petrol: 300,
        diesel: 130,
      },
      {
        quarter: "Q3",
        petrol: 350,
        diesel: 160,
      },
      {
        quarter: "Q4",
        petrol: 400,
        diesel: 200,
      },
    ],
    series: [
      {
        type: "line",
        xKey: "quarter",
        yKey: "petrol",
        yName: "Petrol",
      },
      {
        type: "line",
        xKey: "quarter",
        yKey: "diesel",
        yName: "Diesel",
      },
    ],
  };
}
