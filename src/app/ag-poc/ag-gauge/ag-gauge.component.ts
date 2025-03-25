import { Component } from '@angular/core';
import { AgGauge } from 'ag-charts-angular';
import { AgRadialGaugeOptions } from 'ag-charts-enterprise';

@Component({
  selector: 'ag-gauge-card',
  imports: [AgGauge],
  template: `
    <ag-gauge [options]="options" class=" block w-full h-full"></ag-gauge>
  `,
})
export class AgGaugeComponent {
  options: AgRadialGaugeOptions = {
    padding: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    type: "radial-gauge",
    value: 80,
    scale: {
      min: 0,
      max: 100,
    },
    label: {
      formatter({ value }) {
        return `${value.toFixed(0)}%`;
      },
      fontSize: 84
  },
    secondaryLabel: {
      text: 'Finance Score',
      fontSize: 24
  },
}
}
