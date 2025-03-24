import { Component } from '@angular/core';
import { CardComponent } from "../components/ui/card/card.component";
import { AgBarComponent } from "./ag-bar/ag-bar.component";
import { AgLineComponent } from "./ag-line/ag-line.component";
import { AgBarLineComponent } from "./ag-bar-line/ag-bar-line.component";
import { AgDrilldownComponent } from "./ag-drilldown/ag-drilldown.component";
import { AgDonutComponent } from './ag-donut/ag-donut.component';

@Component({
  selector: 'app-ag-poc',
  imports: [CardComponent, AgBarComponent, AgLineComponent, AgBarLineComponent, AgDrilldownComponent, AgDonutComponent],
  template: `
  <div class="px-4 my-6 max-w-screen-2xl mx-auto">
    <div class="grid md:grid-cols-2 gap-6">
      <app-card class="h-full *:h-full" header="Bar Chart"><ag-bar /></app-card>
      <app-card class="h-full *:h-full" header="Line Chart"><ag-line /></app-card>
      <app-card class="h-full *:h-full" header="Drilldown Chart"><ag-drilldown /></app-card>
      <app-card class="h-full *:h-full" header="Donut Chart"><ag-donut /></app-card>
      <app-card class="h-full *:h-full md:col-span-2 min-h-[500px]" header="Bar Line Chart"><ag-bar-line /></app-card>
    </div>
  </div>`
})
export class AgPocComponent {

}
