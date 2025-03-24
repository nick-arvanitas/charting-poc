import { Component } from '@angular/core';
import { EChartsCoreOption } from 'echarts/core';


@Component({
  selector: 'app-apache',
  template: `
<div id="main" style="width: 600px;height:400px;"></div>


<div class="flex flex-col gap-y-2 p-4">
  <div class="text-3xl">Notes</div>
  <div class="text-sm text-gray-700">Not great documentation. Lots of vars. Basic idea is create a div and then target it with JS and use their API to style it</div>
</div>
  `
})
export class ApacheComponent {
  option = {
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['A', 'B', 'C', 'D', 'E']
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        data: [
          { value: 335, name: 'A' },
          { value: 310, name: 'B' },
          { value: 234, name: 'C' },
          { value: 135, name: 'D' },
          { value: 1548, name: 'E' }
        ]
      }
    ]
  };
}
