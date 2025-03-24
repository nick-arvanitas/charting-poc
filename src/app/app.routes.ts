import { Routes } from '@angular/router';

import { AgComponent } from './ag/ag.component';
import { AmchartsComponent } from './routes/amcharts/amcharts.component';
import { ApacheComponent } from './routes/apache/apache.component';
import { ApexComponent } from './routes/apex/apex.component';
import { C3Component } from './routes/c3/c3.component';
import { CanvasjsComponent } from './routes/canvasjs/canvasjs.component';
import { ChartjsComponent } from './routes/chartjs/chartjs.component';
import { FusionchartsComponent } from './routes/fusioncharts/fusioncharts.component';
import { GoogleComponent } from './routes/google/google.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { LightningComponent } from './routes/lightning/lightning.component';
import { RechartsComponent } from './routes/recharts/recharts.component';
import { SisenseComponent } from './routes/sisense/sisense.component';
import { TableauComponent } from './routes/tableau/tableau.component';
import { ScichartComponent } from './routes/scichart/scichart.component';
import { EchartsComponent } from './routes/echarts/echarts.component';
import { D3Component } from './d3/d3.component';
import { HighchartsPocComponent } from './highcharts-poc/highcharts-poc.component';
import { AgPocComponent } from './ag-poc/ag-poc.component';

export const routes: Routes = [
  { path: 'ag', component: AgComponent },
  { path: 'highcharts', component: HighchartsComponent },
  { path: 'highcharts-poc', component: HighchartsPocComponent },
  { path: 'ag-poc', component: AgPocComponent },
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
