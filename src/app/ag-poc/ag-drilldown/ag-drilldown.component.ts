import { Component } from '@angular/core';
import { AgChartOptions } from 'ag-charts-enterprise';
import { AgCharts } from "ag-charts-angular";


@Component({
  selector: 'ag-drilldown',
  imports: [AgCharts],
  template: `
  @if (isDrilldown) {
    <button (click)="goBack()">Back</button>
  }

<ag-charts [options]="options" class="block h-[400px] w-full"></ag-charts>
  `,
})
export class AgDrilldownComponent {
  baseData: any = [
    { category: 'A', value: 30 },
    { category: 'B', value: 50 },
    { category: 'C', value: 40 },
  ];

  drilldownData: any = {
    A: [
      { category: 'A1', value: 10 },
      { category: 'A2', value: 20 },
    ],
    B: [
      { category: 'B1', value: 12 },
      { category: 'B2', value: 40 },
    ],
    C: [
      { category: 'C1', value: 10 },
      { category: 'C2', value: 30 },
    ],
  };

  isDrilldown = false;
  mainChartOptions: AgChartOptions = {
    data: this.baseData,
    animation: {
      enabled: true,
      duration: 500
    },
    padding: {
      left: 0,
      right: 0,
      top: 8,
      bottom: 0
    },
    series: [
      {
        lineDash: [2, 0],
        showInLegend: true,
        type: 'bar',
        xKey: 'category',
        yKey: 'value',
        label: {
          placement: 'inside-start',
          padding: 8
        },
        strokeWidth: 1000,
        strokeOpacity: 1,
        stroke: 'green',
        listeners: {
          nodeClick: (event: any) => this.onDrilldown(event),
        },
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
        
      },
      {
        type: 'number',
        position: 'left'
      }
    ]
  };

  options: any = { ...this.mainChartOptions };

  onDrilldown(event: any) {
    const category = event.datum.category;
      this.options = {
        ...this.options,
        data: this.drilldownData[category],
        animation: {
          enabled: true,
          duration: 500
        },
        series: [
          {
            
            type: 'bar',
            xKey: 'category',
            yKey: 'value',
          },
        ],
      };
      this.isDrilldown = true;
  }

  goBack() {
    this.options = { ...this.mainChartOptions };
    this.isDrilldown = false;
  }
}
