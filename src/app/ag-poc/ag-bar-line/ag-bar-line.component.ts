import { Component } from "@angular/core";
import { AgCharts } from "ag-charts-angular";
import {
  AgCartesianAxisOptions,
  AgChartOptions,
} from "ag-charts-community";


@Component({
  selector: "ag-bar-line",
  standalone: true,
  imports: [AgCharts],
  template: `
<ag-charts class="block h-full"
        [options]="options"
    ></ag-charts>
`,
})
export class AgBarLineComponent {

  options: AgChartOptions = {
    data: [
      {
        year: "2001",
        adults: 24,
        men: 22,
        women: 25,
        children: 13,
        portions: 3.4,
      },
      {
        year: "2003",
        adults: 24,
        men: 22,
        women: 26,
        children: 11,
        portions: 3.4,
      },
      {
        year: "2005",
        adults: 28,
        men: 26,
        women: 30,
        children: 17,
        portions: 3.7,
      },
      {
        year: "2007",
        adults: 29,
        men: 25,
        women: 31,
        children: 21,
        portions: 3.8,
      },
      {
        year: "2009",
        adults: 26,
        men: 25,
        women: 28,
        children: 21,
        portions: 3.5,
      },
      {
        year: "2011",
        adults: 27,
        men: 24,
        women: 29,
        children: 18,
        portions: 3.6,
      },
      {
        year: "2013",
        adults: 26,
        men: 25,
        women: 28,
        children: 16,
        portions: 3.6,
      },
      {
        year: "2015",
        adults: 26,
        men: 24,
        women: 27,
        children: 20,
        portions: 3.5,
      },
      {
        year: "2017",
        adults: 29,
        men: 26,
        women: 32,
        children: 18,
        portions: 3.8,
      },
    ],
    padding: {
      left: 0,
      right: 0,
      top: 8,
      bottom: 0
    },
    series: [
      {
        type: "bar",
        xKey: "year",
        yKey: "women",
        yName: "Women",
        grouped: true,
      },
      {
        type: "bar",
        xKey: "year",
        yKey: "men",
        yName: "Men",
        grouped: true, 
      },
      {
        type: "line",
        xKey: "year",
        yKey: "portions",
        yName: "Portions", 
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
      },
      {
        // primary y axis
        type: "number",
        position: "left",
        keys: ["women", "men", "children", "adults"],
        title: {
          text: "Adults Who Eat 5 A Day (%)",
        },
      },
      {
        type: "number",
        position: "right",
        keys: ["portions"],
        title: {
          text: "Portions Consumed (Per Day)",
        },
      },
    ] as AgCartesianAxisOptions[],
  }
}