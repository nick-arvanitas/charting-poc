import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-enterprise';

@Component({
  selector: 'ag-bar',
  imports: [AgCharts],
  template: `
  <ag-charts class="block"
        [options]="options"
    ></ag-charts>
  `,
})
export class AgBarComponent {
  
  options: AgChartOptions = {
    legend: {
      enabled: false,
    },
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
    ],
    series: [
      {
        type: "bar",
        xKey: "quarter",
        yKey: "iphone",
        yName: "iPhone",
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "mac",
        yName: "Mac",
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "ipad",
        yName: "iPad",
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "wearables",
        yName: "Wearables",
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "services",
        yName: "Services",
      },
    ],
  }
}
