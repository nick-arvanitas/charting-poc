import { Component } from '@angular/core';
import { CardComponent } from "../components/ui/card/card.component";
import { HcBarLineComponent } from "./hc-bar-line/hc-bar-line.component";
import { HcDrilldownComponent } from "./hc-drilldown/hc-drilldown.component";
import { HcLineComponent } from "./hc-line/hc-line.component";
import { HcBarComponent } from "./hc-bar/hc-bar.component";
import { HcDonutComponent } from './hc-donut/hc-donut.component';

@Component({
  selector: 'app-highcharts-poc',
  imports: [CardComponent, HcBarLineComponent, HcDrilldownComponent, HcLineComponent, HcBarComponent, HcDonutComponent],
  template: `
  <div class="px-4 my-6 max-w-screen-2xl mx-auto">
    <div class="grid grid-cols-2 gap-6">
      <app-card header="Bar Chart" class="h-full *:h-full"><hc-bar /></app-card>
      <app-card header="Line Chart" class="h-full *:h-full"><hc-line /></app-card>
      <app-card header="Drilldown Chart" class="h-full *:h-full"><hc-drilldown /></app-card>
      <app-card header="Donut Chart" class="h-full *:h-full"><hc-donut /></app-card>
      <app-card header="Bar Line Chart" class="h-full *:h-full col-span-2 min-h-[500px]"><hc-bar-line /></app-card>
    </div>
  </div>`
})
export class HighchartsPocComponent {

}
