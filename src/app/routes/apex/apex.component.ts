// import { Component, AfterViewInit } from '@angular/core';
// import ApexCharts from 'apexcharts';

// @Component({
//   selector: 'app-apex',
//   template: `
//     <div id="chart" class="max-w-screen-md"></div>

//     <div class="flex flex-col gap-y-2 p-4">
//       <div class="text-3xl">Notes</div>
//       <div class="text-sm text-gray-700">HMR Breaks</div>
//       <div class="text-sm text-gray-700">After View Init. Similar to using Hubspot forms or appending an iframe or something</div>
//       <div class="text-sm text-gray-700">document.querySelector(#chart)</div>
//   </div>
//   `
// })
// export class ApexComponent implements AfterViewInit {
//   options: any = {
//     chart: {
//       type: 'line'
//     },
//     series: [{
//       name: 'sales',
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//     }],
//     xaxis: {
//       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//     }
//   };

//   ngAfterViewInit() {
//     const chart = new ApexCharts(document.querySelector("#chart"), this.options);
//     chart.render();
//   }
// }
