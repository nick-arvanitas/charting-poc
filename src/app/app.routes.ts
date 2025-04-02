import { Routes } from '@angular/router';

import { AgComponent } from './ag/ag.component';
import { AgPocComponent } from './ag-poc/ag-poc.component';
import { AgChartsInAppComponent } from './ag-charts-in-app/ag-charts-in-app.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { HighchartsPocComponent } from './highcharts-poc/highcharts-poc.component';

export const routes: Routes = [
  { path: 'ag', component: AgComponent },
  { path: 'highcharts', component: HighchartsComponent },
  { path: 'highcharts-poc', component: HighchartsPocComponent },
  { path: 'ag-poc', component: AgPocComponent },
  { path: 'ag-charts-in-app', component: AgChartsInAppComponent },
  // { path: 'amcharts', component: AmchartsComponent },
  // { path: 'apache', component: ApacheComponent },
  // { path: 'apex', component: ApexComponent },
  // { path: 'c3', component: C3Component },
  // { path: 'canvasjs', component: CanvasjsComponent },
  // { path: 'chartjs', component: ChartjsComponent },
  // { path: 'fusioncharts', component: FusionchartsComponent },
  // { path: 'google', component: GoogleComponent },
  // { path: 'lightning', component: LightningComponent },
  // { path: 'recharts', component: RechartsComponent },
  // { path: 'sichert', component: ScichartComponent },
  // { path: 'sisense', component: SisenseComponent },
  // { path: 'tableau', component: TableauComponent },
  // { path: 'echarts', component: EchartsComponent },
  { path: '', redirectTo: 'ag', pathMatch: 'full' }, // Redirect to 'ag'
];
