import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgBarSeriesOptions, AgCartesianAxisOptions, AgChartOptions, AgLineSeriesOptions } from 'ag-charts-enterprise';
import { createSequentialBlueTheme, createSequentialWarmTheme } from '../../../../agtheme';

@Component({
  selector: 'incident-rate',
  imports: [AgCharts],
  template: `
<ag-charts class="block h-full"
        [options]="options"
    ></ag-charts>
  `,
})
export class IncidentRateComponent {

  options: AgChartOptions = {
    theme: createSequentialBlueTheme([10, 0]),
    data: [
      {
        month: "Mar 2024",
        workHours: 325000,
        incidentRate: 0.28,
      },
      {
        month: "Apr 2024", 
        workHours: 380000,
        incidentRate: 0.32,
      },
      {
        month: "May 2024",
        workHours: 420000,
        incidentRate: 0.35,
      },
      {
        month: "Jun 2024",
        workHours: 450000,
        incidentRate: 0.31,
      },
      {
        month: "Jul 2024",
        workHours: 475000,
        incidentRate: 0.29,
      },
      {
        month: "Aug 2024",
        workHours: 445000,
        incidentRate: 0.67,
      },
      {
        month: "Sep 2024",
        workHours: 410000,
        incidentRate: 0.53,
      },
      {
        month: "Oct 2024",
        workHours: 385000,
        incidentRate: 0.30,
      },
      {
        month: "Nov 2024",
        workHours: 350000,
        incidentRate: 0.28,
      },
      {
        month: "Dec 2024",
        workHours: 290000,
        incidentRate: 0.25,
      },
      {
        month: "Jan 2025",
        workHours: 275000,
        incidentRate: 0.31,
      },
      {
        month: "Feb 2025",
        workHours: 315000,
        incidentRate: 0.34,
      }
    ],
    padding: {
      left: 0,
      right: 0,
      top: 8,
      bottom: 0
    },
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "workHours",
        yName: "Work Hours",
      } as AgBarSeriesOptions,
      {
        type: "line",
        xKey: "month",
        yKey: "incidentRate",
        yName: "Incident Rate",
        marker: {
          itemStyler: (item) => {
            return {
              fill: item.datum.incidentRate > 0.5 ? '#ef4444' : '#22c55e',
              stroke: item.datum.incidentRate > 0.5 ? '#dc2626' : '#16a34a',
              strokeWidth: 2,
            }
          }
        },
        label: {
          enabled: true,
          fontSize: 14
        },
        strokeWidth: 2,
      } as AgLineSeriesOptions
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
      },
      {
        type: "number",
        position: "left",
        keys: ["incidentRate"],
        min: 0,
        max: 1,
        label: {
          formatter: (params) => params.value.toFixed(1)
        }
      },
      {
        type: "number",
        position: "right",
        keys: ["workHours"],
        title: {
          text: "Work Hours",
        },
        label: {
          enabled: false,
        }
      },
    ] as AgCartesianAxisOptions[],
    legend: {
      enabled: false,
    }
  }
}
