import { Component, ViewChild } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from 'ag-charts-enterprise';
import { createCategoricalCoolTheme } from '../../../../agtheme';

@Component({
  selector: 'bookings',
  imports: [AgCharts],
  template: `
  <ag-charts class="block"
        [options]="options"
    ></ag-charts>
  `,
})
export class BookingsComponent {

  @ViewChild(AgCharts) 
  public agCharts!: AgCharts;

  monthlyData = [
    { month: 'January', upgrades: 300000, reactivations: 200000, renewals: 350000, enrollments: 400000, revenueTier: 500000 },
    { month: 'February', upgrades: 320000, reactivations: 210000, renewals: 340000, enrollments: 430000, revenueTier: 550000 },
    { month: 'March', upgrades: 310000, reactivations: 190000, renewals: 360000, enrollments: 420000, revenueTier: 520000 }
  ];

  yearlyData = [{
    month: '2024',
    upgrades: this.monthlyData.reduce((sum, month) => sum + month.upgrades, 0),
    reactivations: this.monthlyData.reduce((sum, month) => sum + month.reactivations, 0),
    renewals: this.monthlyData.reduce((sum, month) => sum + month.renewals, 0),
    enrollments: this.monthlyData.reduce((sum, month) => sum + month.enrollments, 0),
    revenueTier: this.monthlyData.reduce((sum, month) => sum + month.revenueTier, 0)
  }];

  showMonthly = true;

  get options(): AgChartOptions {
    return {
      theme: createCategoricalCoolTheme([0, 2, 4, 6, 9]),
      data: this.showMonthly ? this.monthlyData : this.yearlyData,
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
    };
  }

  toggleView(view: 'month' | 'year') {
    this.showMonthly = view === 'month';
  }

  downloadChart() {
    this.agCharts.chart!.download();
  }
}
