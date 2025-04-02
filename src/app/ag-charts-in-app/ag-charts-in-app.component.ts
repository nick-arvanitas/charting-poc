import { Component, ViewChild } from '@angular/core';
import { CardComponent } from "../components/ui/card/card.component";
import { BookingsComponent } from "./bookings/bookings.component";
import { CommonModule } from '@angular/common';
import { EnrollmentStatusComponent } from './enrollment-status/enrollment-status.component';
import { ScoreOverTimeComponent } from "./score-over-time/score-over-time.component";
import { IncidentRateComponent } from "./incident-rate/incident-rate.component";
import { FindingsDrilldown } from "./findings-drilldown/findings-drilldown.component";
import { TableModule } from 'primeng/table';
import { SparklineComponent } from "./sparkline/sparkline.component";
import { SparkBar } from "./sparkbar/sparkbar.component";
import { SparkBarH } from "./sparkbar-h/sparkbar-h.component";
@Component({
  selector: 'ag-charts-in-app',
  imports: [CardComponent, BookingsComponent, CommonModule, EnrollmentStatusComponent, ScoreOverTimeComponent, IncidentRateComponent, FindingsDrilldown, TableModule, SparklineComponent, SparkBar, SparkBarH ],
  template: `
  <div class="px-4 my-6 max-w-screen-2xl mx-auto">
    <div class="grid md:grid-cols-2 gap-6">
      <app-card class="h-full *:h-full md:col-span-2" header="Bookings Over Time">
        <div class="flex items-center gap-4" header>
          <div class="flex rounded-md shadow-sm" role="group">
             <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700" (click)="bookings.toggleView('month')">
              Month
            </button>
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700" (click)="bookings.toggleView('year')">
              Year
            </button>
          </div>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5" (click)="bookings.downloadChart()">
            Download
          </button>
        </div>
        <bookings #bookings />
      </app-card>

      <app-card header="Enrollment Status">
        <enrollment-status />
      </app-card>

      <app-card header="Score Over Time">
        <score-over-time />
      </app-card>

      <app-card header="Findings Drilldown">
        <findings-drilldown />
      </app-card>
      
      <app-card header="Incident Rate" class="col-span-2">
        <incident-rate />
      </app-card>

      <p-table [value]="products" class="col-span-2" [resizableColumns]="true" styleClass="p-datatable-gridlines">
        <ng-template pTemplate="header">
            <tr>
                <th pResizableColumn>Code</th>
                <th pResizableColumn>Name</th>
                <th pResizableColumn>Category</th>
                <th pResizableColumn>Quantity</th>
                <th pResizableColumn>Sparkline</th>
                <th pResizableColumn>Sparkbar</th>
                <th pResizableColumn>Sparkbar Horizontal</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product let-i="rowIndex">
            @if (i < 10) {
                <tr>
                    <td>{{ product.code }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.quantity }}</td>
                    <td><sparkline /></td>
                    <td><sparkbar /></td>
                    <td><sparkbar-h /></td>
                </tr>
            }
        </ng-template>
      </p-table>


    </div>
  </div>
  `,
})
export class AgChartsInAppComponent {
  @ViewChild('bookings') bookings!: BookingsComponent;

  products = [
    { code: '1', name: 'Product 1', category: 'Category 1', quantity: 10 },
    { code: '2', name: 'Product 2', category: 'Category 2', quantity: 20 },
    { code: '3', name: 'Product 3', category: 'Category 3', quantity: 30 },
    { code: '4', name: 'Product 4', category: 'Category 4', quantity: 40 },
    { code: '5', name: 'Product 5', category: 'Category 5', quantity: 50 },
  ]
}
