import { Component, ViewChild } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from 'ag-charts-enterprise';
import { myTheme } from '../../../../agtheme';

@Component({
  selector: 'bookings',
  imports: [AgCharts],
  template: `
  <ag-charts class="block"
        [options]="options"
    ></ag-charts>
    <button (click)="download()">Download PNG</button>

  `,
})
export class BookingsComponent {

  @ViewChild(AgCharts) 
  public agCharts!: AgCharts;

  options: AgChartOptions = {
    theme: myTheme,
    data: [
      { month: 'January', upgrades: 300000, reactivations: 200000, renewals: 350000, enrollments: 400000, revenueTier: 500000 },
      { month: 'February', upgrades: 320000, reactivations: 210000, renewals: 340000, enrollments: 430000, revenueTier: 550000 },
      { month: 'March', upgrades: 310000, reactivations: 190000, renewals: 360000, enrollments: 420000, revenueTier: 520000 }
    ],
    series: [
      { type: 'bar', xKey: 'month', yKey: 'upgrades', stacked: true, yName: 'Upgrades', strokeOpacity: 0 },
      { type: 'bar', xKey: 'month', yKey: 'reactivations', stacked: true, yName: 'Reactivations', strokeOpacity: 0 },
      { type: 'bar', xKey: 'month', yKey: 'renewals', stacked: true, yName: 'Renewals', strokeOpacity: 0 },
      { type: 'bar', xKey: 'month', yKey: 'enrollments', stacked: true, yName: 'Enrollments', strokeOpacity: 0 },
      { type: 'bar', xKey: 'month', yKey: 'revenueTier', stacked: true, yName: 'Revenue Tier', strokeOpacity: 0 }
    ],
    legend: {
      position: 'bottom',
    },
    axes: [
      { type: 'category', position: 'bottom' },
      { 
        type: 'number', 
        position: 'left',
        label: {
          formatter: (params) => {return '$' + params.value.toLocaleString()}
        }
      }
    ]
  }

  download = () => {
    this.agCharts.chart!.download();
  };
}
