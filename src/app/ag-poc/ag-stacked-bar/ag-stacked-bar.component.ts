import { Component } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from 'ag-charts-enterprise';

@Component({
  selector: 'ag-stacked-bar',
  imports: [AgCharts],
  template: `
  <ag-charts class="block"
        [options]="options"
    ></ag-charts>
  `,
})
export class AgStackedBarComponent {
  options: AgChartOptions = {
    padding: {
      left: 0,
      right: 0,
      top: 8,
      bottom: 0
    },
    
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
      {
        quarter: "Q3'18",
        iphone: 112,
        mac: 20,
        ipad: 18,
        wearables: 14,
        services: 36,
      },
      {
        quarter: "Q4'18",
        iphone: 118,
        mac: 24,
        ipad: 14,
        wearables: 14,
        services: 36,
      },
      {
        quarter: "Q1'19",
        iphone: 124,
        mac: 18,
        ipad: 16,
        wearables: 18,
        services: 26,
      },
      {
        quarter: "Q2'19",
        iphone: 108,
        mac: 20,
        ipad: 16,
        wearables: 18,
        services: 40,
      },
      {
        quarter: "Q3'19",
        iphone: 96,
        mac: 22,
        ipad: 18,
        wearables: 24,
        services: 42,
      },
      {
        quarter: "Q4'19",
        iphone: 104,
        mac: 22,
        ipad: 14,
        wearables: 20,
        services: 40,
      },
    ],
    series: [
      {
        type: "bar",
        xKey: "quarter",
        yKey: "iphone",
        yName: "iPhone",
        stacked: true,
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "mac",
        yName: "Mac",
        stacked: true,
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "ipad",
        yName: "iPad",
        stacked: true,
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "wearables",
        yName: "Wearables",
        stacked: true,
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "services",
        yName: "Services",
        stacked: true,
      },
    ],
  };
}
