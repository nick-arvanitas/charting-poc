import { Component } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import {eastern, pacific, mountain, central} from '../data/map'
import {topology} from '../data/topology'
import { AgChartOptions } from 'ag-charts-enterprise';

@Component({
  selector: 'ag-map',
  imports: [AgCharts],
  template: `
  <ag-charts class="block"
        [options]="options"
    ></ag-charts>
  `,
})
export class AgMapComponent {
  options: AgChartOptions = {
      topology,
      padding: {
        left: 0,
        right: 0,
        top: 8,
        bottom: 0
      },
      series: [
        {
          type: "map-shape-background",
        },
        {
          type: "map-shape",
          data: pacific,
          idKey: "name",
          title: "Pacific",
        },
        {
          type: "map-shape",
          data: mountain,
          idKey: "name",
          title: "Mountain",
          visible: false,
        },
        {
          type: "map-shape",
          data: central,
          idKey: "name",
          title: "Central",
          visible: false,
        },
        {
          type: "map-shape",
          data: eastern,
          idKey: "name",
          title: "Eastern",
          visible: true,
        },
      ],
      
    }
}
