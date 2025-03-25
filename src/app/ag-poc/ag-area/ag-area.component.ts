import { Component } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from 'ag-charts-enterprise';

@Component({
  selector: 'ag-area',
  imports: [AgCharts],
  template: `
  <ag-charts class="block"
        [options]="options"
    ></ag-charts>
  `,
})
export class AgAreaComponent {
  options: AgChartOptions = {
    padding: {
      left: 0,
      right: 0,
      top: 8,
      bottom: 0
    },
    
    data: [
      { month: "Jan", subscriptions: 222, services: 250, products: 200 },
      { month: "Feb", subscriptions: 240, services: 255, products: 210 },
      { month: "Mar", subscriptions: 280, services: 245, products: 195 },
      { month: "Apr", subscriptions: 300, services: 260, products: 205 },
      { month: "May", subscriptions: 350, services: 235, products: 215 },
      { month: "Jun", subscriptions: 420, services: 270, products: 200 },
      { month: "Jul", subscriptions: 300, services: 255, products: 225 },
      { month: "Aug", subscriptions: 270, services: 305, products: 210 },
      { month: "Sep", subscriptions: 260, services: 280, products: 250 },
      { month: "Oct", subscriptions: 385, services: 250, products: 205 },
      { month: "Nov", subscriptions: 320, services: 265, products: 215 },
      { month: "Dec", subscriptions: 330, services: 255, products: 220 },
    ],
    series: [
      {
        type: "area",
        xKey: "month",
        yKey: "subscriptions",
        yName: "Subscriptions",
      },
      {
        type: "area",
        xKey: "month",
        yKey: "services",
        yName: "Services",
      },
      {
        type: "area",
        xKey: "month",
        yKey: "products",
        yName: "Products",
      },
    ],
  };
}
