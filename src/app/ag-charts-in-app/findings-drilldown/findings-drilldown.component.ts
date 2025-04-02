import { Component } from "@angular/core";
import { AgCharts } from "ag-charts-angular";
import {
  AgChartOptions,
  AgPolarChartOptions,
} from "ag-charts-enterprise";
import "ag-charts-enterprise";
import clone from "clone";
import { createDivergentTheme, createSequentialNegativeTheme, createSequentialPositiveTheme } from "../../../../agtheme";

@Component({
  selector: "findings-drilldown",
  standalone: true,
  imports: [AgCharts],
  template: `
    <ag-charts
      class="block h-[400px] w-full"
      [options]="options"
    ></ag-charts>
  `,
})
export class FindingsDrilldown {
  public options: AgChartOptions;

  baseData = [
    { category: 'Negative', value: 30 },
    { category: 'Positive', value: 50 },
  ];

  drilldownData: any = {
    Negative: [
      { category: 'IDLH', value: 10 },
      { category: 'Warning', value: 20 },
    ],
    Positive: [
      { category: 'Positive', value: 12 },
      { category: 'Super Positive', value: 40 },
    ],
  };

  isDrilldown = false;

  constructor() {
    this.options = {
      theme: createDivergentTheme([2, 8]),
      data: this.baseData,
      animation: {
        enabled: true,
        duration: 500
      },
      series: [
        {
          type: "donut",
          calloutLabelKey: "category",
          angleKey: "value",
          innerRadiusRatio: 0.7,
          listeners: {
            nodeClick: (event: any) => this.onDrilldown(event),
          },
        },
      ],
    };
  }

  onDrilldown(event: any) {
    if (!this.isDrilldown) {
      const category = event.datum.category;
      const options = clone(this.options);
      options.data = this.drilldownData[category];
      options.theme = category === 'Positive' ? 
        createSequentialPositiveTheme([5, 1]) :
        createSequentialNegativeTheme([2, 4]);
      this.options = options;
      this.isDrilldown = true;
    } else {
      const options = clone(this.options);
      options.data = this.baseData;
      options.theme = createDivergentTheme([2, 8]);
      this.options = options;
      this.isDrilldown = false;
    }
  }
}