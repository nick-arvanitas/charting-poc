import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-enterprise';

@Component({
  selector: 'ag-bubble',
  imports: [AgCharts],
  template: `
    <ag-charts [options]="options" class="block w-full"></ag-charts>
  `,
})
export class AgBubbleComponent {
  options: AgChartOptions = {
    padding: {
      left: 0,
      right: 0,
      top: 8,
      bottom: 0
    },
    
    data: [
      {
        height: 161.2,
        weight: 51.6,
        age: 22,
      },
      {
        height: 167.5,
        weight: 59,
        age: 20,
      },
      {
        height: 159.5,
        weight: 49.2,
        age: 19,
      },
      {
        height: 157,
        weight: 63,
        age: 25,
      },
      {
        height: 155.8,
        weight: 53.6,
        age: 21,
      },
      {
        height: 170,
        weight: 59,
        age: 23,
      },
      {
        height: 159.1,
        weight: 47.6,
        age: 26,
      },
      {
        height: 166,
        weight: 69.8,
        age: 22,
      },
      {
        height: 176.2,
        weight: 66.8,
        age: 28,
      },
      {
        height: 160.2,
        weight: 75.2,
        age: 40,
      },
      {
        height: 172.5,
        weight: 55.2,
        age: 32,
      },
      {
        height: 170.9,
        weight: 54.2,
        age: 25,
      },
      {
        height: 172.9,
        weight: 62.5,
        age: 25,
      },
      {
        height: 153.4,
        weight: 42,
        age: 29,
      },
      {
        height: 160,
        weight: 50,
        age: 22,
      },
      {
        height: 147.2,
        weight: 49.8,
        age: 25,
      },
      {
        height: 168.2,
        weight: 49.2,
        age: 23,
      },
      {
        height: 175,
        weight: 73.2,
        age: 37,
      },
      {
        height: 157,
        weight: 47.8,
        age: 19,
      },
      {
        height: 167.6,
        weight: 68.8,
        age: 23,
      },
      {
        height: 159.5,
        weight: 50.6,
        age: 25,
      },
      {
        height: 175,
        weight: 82.5,
        age: 26,
      },
      {
        height: 166.8,
        weight: 57.2,
        age: 24,
      },
      {
        height: 176.5,
        weight: 87.8,
        age: 29,
      },
      {
        height: 170.2,
        weight: 72.8,
        age: 22,
      },
      {
        height: 174,
        weight: 54.5,
        age: 30,
      },
      {
        height: 173,
        weight: 59.8,
        age: 23,
      },
      {
        height: 179.9,
        weight: 67.3,
        age: 38,
      },
      {
        height: 170.5,
        weight: 67.8,
        age: 23,
      },
      {
        height: 160,
        weight: 47,
        age: 19,
      },
      {
        height: 154.4,
        weight: 46.2,
        age: 46,
      },
      {
        height: 162,
        weight: 55,
        age: 20,
      },
      {
        height: 176.5,
        weight: 83,
        age: 22,
      },
      {
        height: 160,
        weight: 54.4,
        age: 25,
      },
      {
        height: 152,
        weight: 45.8,
        age: 21,
      },
      {
        height: 162.1,
        weight: 53.6,
        age: 23,
      },
      {
        height: 170,
        weight: 73.2,
        age: 31,
      },
      {
        height: 160.2,
        weight: 52.1,
        age: 29,
      },
      {
        height: 161.3,
        weight: 67.9,
        age: 19,
      },
      {
        height: 166.4,
        weight: 56.6,
        age: 21,
      },
      {
        height: 168.9,
        weight: 62.3,
        age: 23,
      },
      {
        height: 163.8,
        weight: 58.5,
        age: 24,
      },
      {
        height: 167.6,
        weight: 54.5,
        age: 20,
      },
      {
        height: 160,
        weight: 50.2,
        age: 19,
      },
      {
        height: 161.3,
        weight: 60.3,
        age: 20,
      },
      {
        height: 167.6,
        weight: 58.3,
        age: 19,
      },
      {
        height: 165.1,
        weight: 56.2,
        age: 20,
      },
      {
        height: 160,
        weight: 50.2,
        age: 19,
      },
      {
        height: 170,
        weight: 72.9,
        age: 22,
      },
      {
        height: 157.5,
        weight: 59.8,
        age: 39,
      },
      {
        height: 167.6,
        weight: 61,
        age: 18,
      },
      {
        height: 160.7,
        weight: 69.1,
        age: 19,
      },
      {
        height: 163.2,
        weight: 55.9,
        age: 26,
      },
      {
        height: 152.4,
        weight: 46.5,
        age: 20,
      },
      {
        height: 157.5,
        weight: 54.3,
        age: 20,
      },
      {
        height: 168.3,
        weight: 54.8,
        age: 26,
      },
      {
        height: 180.3,
        weight: 60.7,
        age: 21,
      },
      {
        height: 165.5,
        weight: 60,
        age: 21,
      },
      {
        height: 165,
        weight: 62,
        age: 38,
      },
      {
        height: 164.5,
        weight: 60.3,
        age: 23,
      },
      {
        height: 156,
        weight: 52.7,
        age: 37,
      },
      {
        height: 160,
        weight: 74.3,
        age: 19,
      },
      {
        height: 163,
        weight: 62,
        age: 25,
      },
      {
        height: 165.7,
        weight: 73.1,
        age: 20,
      },
      {
        height: 161,
        weight: 80,
        age: 41,
      },
      {
        height: 162,
        weight: 54.7,
        age: 26,
      },
      {
        height: 166,
        weight: 53.2,
        age: 21,
      },
      {
        height: 174,
        weight: 75.7,
        age: 47,
      },
      {
        height: 172.7,
        weight: 61.1,
        age: 19,
      },
      {
        height: 167.6,
        weight: 55.7,
        age: 44,
      },
      {
        height: 151.1,
        weight: 48.7,
        age: 35,
      },
      {
        height: 164.5,
        weight: 52.3,
        age: 32,
      },
      {
        height: 163.5,
        weight: 50,
        age: 46,
      },
      {
        height: 152,
        weight: 59.3,
        age: 22,
      },
      {
        height: 169,
        weight: 62.5,
        age: 49,
      },
      {
        height: 164,
        weight: 55.7,
        age: 52,
      },
      {
        height: 161.2,
        weight: 54.8,
        age: 25,
      },
      {
        height: 155,
        weight: 45.9,
        age: 48,
      },
      {
        height: 170,
        weight: 70.6,
        age: 41,
      },
      {
        height: 176.2,
        weight: 67.2,
        age: 18,
      },
      {
        height: 170,
        weight: 69.4,
        age: 30,
      },
      {
        height: 162.5,
        weight: 58.2,
        age: 20,
      },
      {
        height: 170.3,
        weight: 64.8,
        age: 24,
      },
      {
        height: 164.1,
        weight: 71.6,
        age: 23,
      },
      {
        height: 169.5,
        weight: 52.8,
        age: 30,
      },
      {
        height: 163.2,
        weight: 59.8,
        age: 23,
      },
      {
        height: 154.5,
        weight: 49,
        age: 45,
      },
      {
        height: 159.8,
        weight: 50,
        age: 20,
      },
      {
        height: 173.2,
        weight: 69.2,
        age: 20,
      },
      {
        height: 170,
        weight: 55.9,
        age: 23,
      },
      {
        height: 161.4,
        weight: 63.4,
        age: 21,
      },
      {
        height: 169,
        weight: 58.2,
        age: 28,
      },
      {
        height: 166.2,
        weight: 58.6,
        age: 45,
      },
      {
        height: 159.4,
        weight: 45.7,
        age: 24,
      },
      {
        height: 162.5,
        weight: 52.2,
        age: 25,
      },
      {
        height: 159,
        weight: 48.6,
        age: 19,
      },
      {
        height: 162.8,
        weight: 57.8,
        age: 20,
      },
      {
        height: 159,
        weight: 55.6,
        age: 29,
      },
      {
        height: 179.8,
        weight: 66.8,
        age: 24,
      },
      {
        height: 162.9,
        weight: 59.4,
        age: 24,
      },
      {
        height: 161,
        weight: 53.6,
        age: 25,
      },
      {
        height: 151.1,
        weight: 73.2,
        age: 31,
      },
      {
        height: 168.2,
        weight: 53.4,
        age: 22,
      },
      {
        height: 168.9,
        weight: 69,
        age: 20,
      },
      {
        height: 173.2,
        weight: 58.4,
        age: 32,
      },
      {
        height: 171.8,
        weight: 56.2,
        age: 25,
      },
      {
        height: 178,
        weight: 70.6,
        age: 19,
      },
      {
        height: 164.3,
        weight: 59.8,
        age: 23,
      },
      {
        height: 163,
        weight: 72,
        age: 22,
      },
      {
        height: 168.5,
        weight: 65.2,
        age: 20,
      },
      {
        height: 166.8,
        weight: 56.6,
        age: 27,
      },
      {
        height: 172.7,
        weight: 105.2,
        age: 34,
      },
      {
        height: 163.5,
        weight: 51.8,
        age: 25,
      },
      {
        height: 169.4,
        weight: 63.4,
        age: 26,
      },
      {
        height: 167.8,
        weight: 59,
        age: 19,
      },
      {
        height: 159.5,
        weight: 47.6,
        age: 26,
      },
      {
        height: 167.6,
        weight: 63,
        age: 25,
      },
      {
        height: 161.2,
        weight: 55.2,
        age: 20,
      },
      {
        height: 160,
        weight: 45,
        age: 21,
      },
      {
        height: 163.2,
        weight: 54,
        age: 18,
      },
      {
        height: 162.2,
        weight: 50.2,
        age: 19,
      },
      {
        height: 161.3,
        weight: 60.2,
        age: 27,
      },
      {
        height: 149.5,
        weight: 44.8,
        age: 26,
      },
      {
        height: 157.5,
        weight: 58.8,
        age: 36,
      },
      {
        height: 163.2,
        weight: 56.4,
        age: 20,
      },
      {
        height: 172.7,
        weight: 62,
        age: 28,
      },
      {
        height: 155,
        weight: 49.2,
        age: 32,
      },
      {
        height: 156.5,
        weight: 67.2,
        age: 32,
      },
      {
        height: 164,
        weight: 53.8,
        age: 23,
      },
      {
        height: 160.9,
        weight: 54.4,
        age: 20,
      },
      {
        height: 162.8,
        weight: 58,
        age: 20,
      },
      {
        height: 167,
        weight: 59.8,
        age: 20,
      },
      {
        height: 160,
        weight: 54.8,
        age: 23,
      },
      {
        height: 160,
        weight: 43.2,
        age: 20,
      },
      {
        height: 168.9,
        weight: 60.5,
        age: 28,
      },
      {
        height: 158.2,
        weight: 46.4,
        age: 23,
      },
      {
        height: 156,
        weight: 64.4,
        age: 19,
      },
      {
        height: 160,
        weight: 48.8,
        age: 28,
      },
      {
        height: 167.1,
        weight: 62.2,
        age: 19,
      },
      {
        height: 158,
        weight: 55.5,
        age: 29,
      },
      {
        height: 167.6,
        weight: 57.8,
        age: 32,
      },
      {
        height: 156,
        weight: 54.6,
        age: 20,
      },
      {
        height: 162.1,
        weight: 59.2,
        age: 28,
      },
      {
        height: 173.4,
        weight: 52.7,
        age: 36,
      },
      {
        height: 159.8,
        weight: 53.2,
        age: 22,
      },
      {
        height: 170.5,
        weight: 64.5,
        age: 20,
      },
      {
        height: 159.2,
        weight: 51.8,
        age: 22,
      },
      {
        height: 157.5,
        weight: 56,
        age: 32,
      },
      {
        height: 161.3,
        weight: 63.6,
        age: 40,
      },
      {
        height: 162.6,
        weight: 63.2,
        age: 40,
      },
      {
        height: 160,
        weight: 59.5,
        age: 42,
      },
      {
        height: 168.9,
        weight: 56.8,
        age: 40,
      },
      {
        height: 165.1,
        weight: 64.1,
        age: 44,
      },
      {
        height: 162.6,
        weight: 50,
        age: 30,
      },
      {
        height: 165.1,
        weight: 72.3,
        age: 28,
      },
      {
        height: 166.4,
        weight: 55,
        age: 37,
      },
      {
        height: 160,
        weight: 55.9,
        age: 40,
      },
      {
        height: 152.4,
        weight: 60.4,
        age: 45,
      },
      {
        height: 170.2,
        weight: 69.1,
        age: 35,
      },
      {
        height: 162.6,
        weight: 84.5,
        age: 41,
      },
      {
        height: 170.2,
        weight: 55.9,
        age: 27,
      },
      {
        height: 158.8,
        weight: 55.5,
        age: 20,
      },
      {
        height: 172.7,
        weight: 69.5,
        age: 24,
      },
      {
        height: 167.6,
        weight: 76.4,
        age: 36,
      },
      {
        height: 162.6,
        weight: 61.4,
        age: 27,
      },
      {
        height: 167.6,
        weight: 65.9,
        age: 32,
      },
      {
        height: 156.2,
        weight: 58.6,
        age: 64,
      },
      {
        height: 175.2,
        weight: 66.8,
        age: 21,
      },
      {
        height: 172.1,
        weight: 56.6,
        age: 32,
      },
      {
        height: 162.6,
        weight: 58.6,
        age: 35,
      },
      {
        height: 160,
        weight: 55.9,
        age: 41,
      },
      {
        height: 165.1,
        weight: 59.1,
        age: 40,
      },
      {
        height: 182.9,
        weight: 81.8,
        age: 29,
      },
      {
        height: 166.4,
        weight: 70.7,
        age: 40,
      },
      {
        height: 165.1,
        weight: 56.8,
        age: 24,
      },
      {
        height: 177.8,
        weight: 60,
        age: 23,
      },
      {
        height: 165.1,
        weight: 58.2,
        age: 41,
      },
      {
        height: 175.3,
        weight: 72.7,
        age: 44,
      },
      {
        height: 154.9,
        weight: 54.1,
        age: 53,
      },
      {
        height: 158.8,
        weight: 49.1,
        age: 19,
      },
      {
        height: 172.7,
        weight: 75.9,
        age: 24,
      },
      {
        height: 168.9,
        weight: 55,
        age: 25,
      },
      {
        height: 161.3,
        weight: 57.3,
        age: 20,
      },
      {
        height: 167.6,
        weight: 55,
        age: 34,
      },
      {
        height: 165.1,
        weight: 65.5,
        age: 32,
      },
      {
        height: 175.3,
        weight: 65.5,
        age: 24,
      },
      {
        height: 157.5,
        weight: 48.6,
        age: 29,
      },
      {
        height: 163.8,
        weight: 58.6,
        age: 31,
      },
      {
        height: 167.6,
        weight: 63.6,
        age: 34,
      },
      {
        height: 165.1,
        weight: 55.2,
        age: 36,
      },
      {
        height: 165.1,
        weight: 62.7,
        age: 32,
      },
      {
        height: 168.9,
        weight: 56.6,
        age: 39,
      },
      {
        height: 162.6,
        weight: 53.9,
        age: 37,
      },
      {
        height: 164.5,
        weight: 63.2,
        age: 52,
      },
      {
        height: 176.5,
        weight: 73.6,
        age: 24,
      },
      {
        height: 168.9,
        weight: 62,
        age: 33,
      },
      {
        height: 175.3,
        weight: 63.6,
        age: 42,
      },
      {
        height: 159.4,
        weight: 53.2,
        age: 34,
      },
      {
        height: 160,
        weight: 53.4,
        age: 37,
      },
      {
        height: 170.2,
        weight: 55,
        age: 39,
      },
      {
        height: 162.6,
        weight: 70.5,
        age: 41,
      },
      {
        height: 167.6,
        weight: 54.5,
        age: 36,
      },
      {
        height: 162.6,
        weight: 54.5,
        age: 19,
      },
      {
        height: 160.7,
        weight: 55.9,
        age: 22,
      },
      {
        height: 160,
        weight: 59,
        age: 23,
      },
      {
        height: 157.5,
        weight: 63.6,
        age: 36,
      },
      {
        height: 162.6,
        weight: 54.5,
        age: 45,
      },
      {
        height: 152.4,
        weight: 47.3,
        age: 25,
      },
      {
        height: 170.2,
        weight: 67.7,
        age: 67,
      },
      {
        height: 165.1,
        weight: 80.9,
        age: 26,
      },
      {
        height: 172.7,
        weight: 70.5,
        age: 21,
      },
      {
        height: 165.1,
        weight: 60.9,
        age: 33,
      },
      {
        height: 170.2,
        weight: 63.6,
        age: 25,
      },
      {
        height: 170.2,
        weight: 54.5,
        age: 24,
      },
      {
        height: 170.2,
        weight: 59.1,
        age: 21,
      },
      {
        height: 161.3,
        weight: 70.5,
        age: 35,
      },
      {
        height: 167.6,
        weight: 52.7,
        age: 27,
      },
      {
        height: 167.6,
        weight: 62.7,
        age: 27,
      },
      {
        height: 165.1,
        weight: 86.3,
        age: 26,
      },
      {
        height: 162.6,
        weight: 66.4,
        age: 25,
      },
      {
        height: 152.4,
        weight: 67.3,
        age: 44,
      },
      {
        height: 168.9,
        weight: 63,
        age: 29,
      },
      {
        height: 170.2,
        weight: 73.6,
        age: 26,
      },
      {
        height: 175.2,
        weight: 62.3,
        age: 23,
      },
      {
        height: 175.2,
        weight: 57.7,
        age: 32,
      },
      {
        height: 160,
        weight: 55.4,
        age: 32,
      },
      {
        height: 165.1,
        weight: 104.1,
        age: 43,
      },
      {
        height: 174,
        weight: 55.5,
        age: 32,
      },
      {
        height: 170.2,
        weight: 77.3,
        age: 41,
      },
      {
        height: 160,
        weight: 80.5,
        age: 33,
      },
      {
        height: 167.6,
        weight: 64.5,
        age: 28,
      },
      {
        height: 167.6,
        weight: 72.3,
        age: 28,
      },
      {
        height: 167.6,
        weight: 61.4,
        age: 25,
      },
      {
        height: 154.9,
        weight: 58.2,
        age: 38,
      },
      {
        height: 162.6,
        weight: 81.8,
        age: 37,
      },
      {
        height: 175.3,
        weight: 63.6,
        age: 25,
      },
      {
        height: 171.4,
        weight: 53.4,
        age: 37,
      },
      {
        height: 157.5,
        weight: 54.5,
        age: 27,
      },
      {
        height: 165.1,
        weight: 53.6,
        age: 27,
      },
      {
        height: 160,
        weight: 60,
        age: 20,
      },
      {
        height: 174,
        weight: 73.6,
        age: 19,
      },
      {
        height: 162.6,
        weight: 61.4,
        age: 32,
      },
      {
        height: 174,
        weight: 55.5,
        age: 26,
      },
      {
        height: 162.6,
        weight: 63.6,
        age: 56,
      },
      {
        height: 161.3,
        weight: 60.9,
        age: 23,
      },
      {
        height: 156.2,
        weight: 60,
        age: 19,
      },
      {
        height: 149.9,
        weight: 46.8,
        age: 31,
      },
      {
        height: 169.5,
        weight: 57.3,
        age: 34,
      },
      {
        height: 160,
        weight: 64.1,
        age: 34,
      },
      {
        height: 175.3,
        weight: 63.6,
        age: 24,
      },
      {
        height: 169.5,
        weight: 67.3,
        age: 22,
      },
      {
        height: 160,
        weight: 75.5,
        age: 34,
      },
      {
        height: 172.7,
        weight: 68.2,
        age: 30,
      },
      {
        height: 162.6,
        weight: 61.4,
        age: 32,
      },
      {
        height: 157.5,
        weight: 76.8,
        age: 40,
      },
      {
        height: 176.5,
        weight: 71.8,
        age: 29,
      },
      {
        height: 164.4,
        weight: 55.5,
        age: 21,
      },
      {
        height: 160.7,
        weight: 48.6,
        age: 33,
      },
      {
        height: 174,
        weight: 66.4,
        age: 33,
      },
      {
        height: 163.8,
        weight: 67.3,
        age: 38,
      },
    ],
    series: [
      {
          type: 'bubble',
          xKey: 'height',
          yKey: 'weight',
          sizeKey: 'age',
          xName: 'Height',
          yName: 'Weight',
          sizeName: 'Age',
      },
  ],
  };
}
