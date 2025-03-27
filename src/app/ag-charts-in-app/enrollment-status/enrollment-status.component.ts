import { Component } from '@angular/core';
import { AgAngleNumberAxisOptions, AgChartOptions, AgDonutSeriesOptions, AgRadialBarSeriesOptions } from 'ag-charts-enterprise';
import { createCategoricalCoolTheme, createDivergentTheme } from '../../../../agtheme';
import { AgCharts } from 'ag-charts-angular';

@Component({
  selector: 'enrollment-status',
  imports: [AgCharts],
  template: `
  <div class="flex gap-x-4">
    <ag-charts class="block w-full" [options]="completion"
    ></ag-charts>
    <ag-charts class="block w-full" [options]="contractors"
    ></ag-charts>

  </div>
  `,
  styles: ``
})
export class EnrollmentStatusComponent {
  contractors: AgChartOptions = {
    theme: createCategoricalCoolTheme(2),
    data: [    {
      quarter: `Q1'23`,
      company: 85,
      safety: 70,
    },
    {
      quarter: `Q2'23`,
      company: 55,
      safety: 90,
    }],
    series: [        {
      type: "radial-bar",
      radiusKey: 'quarter',
      angleKey: "company",
      angleName: "Company",
    },
    {
      type: "radial-bar",
      radiusKey: "quarter",
      angleKey: "safety",
      angleName: "Safety", 
      maxValue: 100
    }
  ] as AgRadialBarSeriesOptions[],
    legend: {
      position: 'bottom',
      enabled: false
    },
    axes: [
      {
        type: "angle-number",
        reverse: false,
        min: 0,
        max: 100,
        startAngle: 0,
        endAngle: 359,
        label: {
          enabled: false,
        },
      } as AgAngleNumberAxisOptions,
      {
        type: "radius-category",
        innerRadiusRatio: 0.2,
        label: {
          enabled: false
        },
      },
    ],
  }
  completion: AgChartOptions = {
    theme: createDivergentTheme([8,4,2]),
    data: [{
      label: 'Paid',
      value: 80
    }, {
      label: 'Trial',
      value: 15
    }, {
      label: 'Expired',
      value: 5
    }],
    series: [{
      type: 'donut',
      angleKey: 'value',
      strokeWidth: 0,
      innerLabels: [
        {
          text: "Completion",
          spacing: 4,
          fontSize: 20,
          color: "black",
        },
      ],
    }] as AgDonutSeriesOptions[],
    legend: {
      position: 'bottom',
      enabled: true
    }
  }
}
