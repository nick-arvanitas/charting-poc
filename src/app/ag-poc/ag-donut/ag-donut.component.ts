import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions, AgDonutSeriesOptions } from 'ag-charts-enterprise';

@Component({
  selector: 'ag-donut',
  imports: [AgCharts],
  template: `
  <ag-charts class="block h-full"
        [options]="options"
    ></ag-charts>
  `,
})
export class AgDonutComponent {
  options: AgChartOptions = {
    data: [
      { asset: "Stocks", amount: 60000 },
      { asset: "Bonds", amount: 40000 },
      { asset: "Cash", amount: 7000 },
      { asset: "Real Estate", amount: 5000 },
      { asset: "Commodities", amount: 3000 },
    ],
    padding: {
      left: 0,
      right: 0,
      top: 8,
      bottom: 0
    },
    series: [
      {
        type: "donut",
        calloutLabelKey: "asset",
        angleKey: "amount",
        innerRadiusRatio: 0.9,
        innerLabels: [
          {
            text: "$100,000",
            spacing: 4,
            fontSize: 32,
            color: "black",
          },
        ],
        calloutLabel: {
          enabled: false
        }
      } as AgDonutSeriesOptions,
    ],
  };
}
