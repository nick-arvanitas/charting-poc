import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions, AgLineSeriesOptions } from 'ag-charts-enterprise';
import { createSequentialPositiveTheme } from '../../../../agtheme';

@Component({
  selector: 'score-over-time',
  imports: [AgCharts],
  template: `
    <ag-charts class="block w-full" [options]="options"></ag-charts>
  `,
})
export class ScoreOverTimeComponent {
  options: AgChartOptions = {
    theme: createSequentialPositiveTheme([9,2]),
    padding: {
      left: 24,
      right: 4,
    },
    data: [
      {
        date: '2023',
        average: 20,
        score: 65
      },
      {
        date: '2024', 
        average: 24,
        score: 72
      },
      {
        date: '2025',
        average: 24,
        score: 80
      },
    ],
    series: [
      {
        type: 'line',
        xKey: 'date',
        yKey: 'average',
        yName: 'Average Score',
      },
      {
        type: 'line', 
        xKey: 'date',
        yKey: 'score',
        yName: 'Your Score',
        marker: {
          enabled: true
        }
      }
    ] as AgLineSeriesOptions[],
    legend: {
      enabled: false
    },
    axes: [
      {
        type: 'category',
        gridLine: {
          enabled: true,
          style: [{
            stroke: 'rgba(0,0,0,0.2)',
            lineDash: [5, 5]
          }]
        },
        line: {
          enabled: false
        },
        tick: {
          enabled: false
        }
      },
      {
        type: 'number',
        position: 'left',
        min: 0,
        max: 100,
        gridLine: {
          enabled: false,
        },
        tick: {
          enabled: false,
        },
        label: {
          enabled: false
        }
      }
    ]
  }
}
