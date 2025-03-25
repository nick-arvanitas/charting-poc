import { Component } from '@angular/core';
import { CardComponent } from "../components/ui/card/card.component";
import { AgBarComponent } from "../ag-poc/ag-bar/ag-bar.component";
import { BookingsComponent } from "./bookings/bookings.component";

@Component({
  selector: 'ag-charts-in-app',
  imports: [CardComponent,  BookingsComponent],
  template: `
  <div class="px-4 my-6 max-w-screen-2xl mx-auto">
    <div class="grid md:grid-cols-2 gap-6">
      <app-card class="h-full *:h-full md:col-span-2" header="Bookings Over Time"><bookings /></app-card>
    </div>
  </div>
  `,
})
export class AgChartsInAppComponent {

}
