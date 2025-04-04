import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
// // import echarts core
// import * as echarts from 'echarts/core';
// // import necessary echarts components
// import { BarChart } from 'echarts/charts';
// import { GridComponent } from 'echarts/components';
// import { CanvasRenderer } from 'echarts/renderers';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MyPreset } from './mypreset';
// echarts.use([BarChart, GridComponent, CanvasRenderer]);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), importProvidersFrom(CommonModule),         provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: MyPreset
        }
    })]
};
