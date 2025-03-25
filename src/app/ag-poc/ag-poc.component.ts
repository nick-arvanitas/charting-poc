import { Component } from '@angular/core';
import { CardComponent } from "../components/ui/card/card.component";
import { AgBarComponent } from "./ag-bar/ag-bar.component";
import { AgLineComponent } from "./ag-line/ag-line.component";
import { AgBarLineComponent } from "./ag-bar-line/ag-bar-line.component";
import { AgDrilldownComponent } from "./ag-drilldown/ag-drilldown.component";
import { AgDonutComponent } from './ag-donut/ag-donut.component';
import { AgAreaComponent } from "./ag-area/ag-area.component";
import { AgMapComponent } from "./ag-map/ag-map.component";
import { AgScatterComponent } from "./ag-scatter/ag-scatter.component";
import { AgStackedBarComponent } from "./ag-stacked-bar/ag-stacked-bar.component";
import { AgStackedRadialComponent } from "./ag-stacked-radial/ag-stacked-radial.component";
import { AgHeatmapComponent } from "./ag-heatmap/ag-heatmap.component";
import { AgBubbleComponent } from "./ag-bubble/ag-bubble.component";
import { AgGaugeComponent } from "./ag-gauge/ag-gauge.component";

@Component({
  selector: 'app-ag-poc',
  imports: [CardComponent, AgBarComponent, AgLineComponent, AgBarLineComponent, AgDrilldownComponent, AgDonutComponent, AgAreaComponent, AgMapComponent, AgScatterComponent, AgStackedBarComponent, AgStackedRadialComponent, AgHeatmapComponent, AgBubbleComponent, AgGaugeComponent],
  template: `
  <div class="px-4 my-6 max-w-screen-2xl mx-auto">
    <div class="grid md:grid-cols-2 gap-6">
      <app-card class="h-full *:h-full" header="Bar Chart"><ag-bar /></app-card>
      <app-card class="h-full *:h-full" header="Line Chart"><ag-line /></app-card>
      <app-card class="h-full *:h-full" header="Drilldown Chart"><ag-drilldown /></app-card>
      <app-card class="h-full *:h-full" header="Donut Chart"><ag-donut /></app-card>
      <app-card class="h-full *:h-full md:col-span-2 min-h-[500px]" header="Bar Line Chart"><ag-bar-line /></app-card>
      <app-card class="h-full *:h-full" header="Map Chart"><ag-map /></app-card>
      <app-card class="h-full *:h-full" header="Area Chart"><ag-area /></app-card>
      <app-card class="h-full *:h-full" header="Heatmap Chart"><ag-heatmap /></app-card>
      <app-card class="h-full *:h-full" header="Scatter Chart"><ag-scatter /></app-card>
      <app-card class="h-full *:h-full" header="Stacked Bar Chart"><ag-stacked-bar /></app-card>
      <app-card class="h-full *:h-full" header="Stacked Radial Chart"><ag-stacked-radial /></app-card>
      <app-card class="h-full *:h-full" header="Bubble"><ag-bubble /></app-card>
      <app-card class="h-full *:h-full" header="Gauge"><ag-gauge-card /></app-card>
    </div>
  </div>`
})
export class AgPocComponent {

}
