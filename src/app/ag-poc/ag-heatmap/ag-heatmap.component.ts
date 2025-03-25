import { Component } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from 'ag-charts-enterprise';


@Component({
  selector: 'ag-heatmap',
  imports: [AgCharts],
  template: `
  <ag-charts class="block"
        [options]="options"
    ></ag-charts>
  `,
})
export class AgHeatmapComponent {
  options: AgChartOptions = {
    padding: {
      left: 0,
      right: 0,
      top: 8,
      bottom: 12
    },
    
    data: [
      {
        year: "2010",
        month: "Jan",
        temperature: 1.2,
      },
      {
        year: "2010",
        month: "Feb",
        temperature: 1.9,
      },
      {
        year: "2010",
        month: "Mar",
        temperature: 5.9,
      },
      {
        year: "2010",
        month: "Apr",
        temperature: 9.1,
      },
      {
        year: "2010",
        month: "May",
        temperature: 10.9,
      },
      {
        year: "2010",
        month: "Jun",
        temperature: 15.2,
      },
      {
        year: "2010",
        month: "Jul",
        temperature: 16.2,
      },
      {
        year: "2010",
        month: "Aug",
        temperature: 14.9,
      },
      {
        year: "2010",
        month: "Sep",
        temperature: 13.4,
      },
      {
        year: "2010",
        month: "Oct",
        temperature: 9.5,
      },
      {
        year: "2010",
        month: "Nov",
        temperature: 4.9,
      },
      {
        year: "2010",
        month: "Dec",
        temperature: 0.4,
      },
      {
        year: "2011",
        month: "Jan",
        temperature: 3.9,
      },
      {
        year: "2011",
        month: "Feb",
        temperature: 6,
      },
      {
        year: "2011",
        month: "Mar",
        temperature: 6.6,
      },
      {
        year: "2011",
        month: "Apr",
        temperature: 12,
      },
      {
        year: "2011",
        month: "May",
        temperature: 12,
      },
      {
        year: "2011",
        month: "Jun",
        temperature: 14.2,
      },
      {
        year: "2011",
        month: "Jul",
        temperature: 15.8,
      },
      {
        year: "2011",
        month: "Aug",
        temperature: 15.8,
      },
      {
        year: "2011",
        month: "Sep",
        temperature: 14.9,
      },
      {
        year: "2011",
        month: "Oct",
        temperature: 12.2,
      },
      {
        year: "2011",
        month: "Nov",
        temperature: 8.9,
      },
      {
        year: "2011",
        month: "Dec",
        temperature: 5.4,
      },
      {
        year: "2012",
        month: "Jan",
        temperature: 5.1,
      },
      {
        year: "2012",
        month: "Feb",
        temperature: 4.5,
      },
      {
        year: "2012",
        month: "Mar",
        temperature: 8.6,
      },
      {
        year: "2012",
        month: "Apr",
        temperature: 6.7,
      },
      {
        year: "2012",
        month: "May",
        temperature: 11.6,
      },
      {
        year: "2012",
        month: "Jun",
        temperature: 13.4,
      },
      {
        year: "2012",
        month: "Jul",
        temperature: 15.5,
      },
      {
        year: "2012",
        month: "Aug",
        temperature: 16.2,
      },
      {
        year: "2012",
        month: "Sep",
        temperature: 12.7,
      },
      {
        year: "2012",
        month: "Oct",
        temperature: 8.8,
      },
      {
        year: "2012",
        month: "Nov",
        temperature: 6.1,
      },
      {
        year: "2012",
        month: "Dec",
        temperature: 4.2,
      },
      {
        year: "2013",
        month: "Jan",
        temperature: 3.4,
      },
      {
        year: "2013",
        month: "Feb",
        temperature: 2.7,
      },
      {
        year: "2013",
        month: "Mar",
        temperature: 1.7,
      },
      {
        year: "2013",
        month: "Apr",
        temperature: 7.4,
      },
      {
        year: "2013",
        month: "May",
        temperature: 10.6,
      },
      {
        year: "2013",
        month: "Jun",
        temperature: 14.1,
      },
      {
        year: "2013",
        month: "Jul",
        temperature: 18.4,
      },
      {
        year: "2013",
        month: "Aug",
        temperature: 16.8,
      },
      {
        year: "2013",
        month: "Sep",
        temperature: 13.3,
      },
      {
        year: "2013",
        month: "Oct",
        temperature: 11.7,
      },
      {
        year: "2013",
        month: "Nov",
        temperature: 6.2,
      },
      {
        year: "2013",
        month: "Dec",
        temperature: 6.3,
      },
      {
        year: "2014",
        month: "Jan",
        temperature: 5,
      },
      {
        year: "2014",
        month: "Feb",
        temperature: 5.6,
      },
      {
        year: "2014",
        month: "Mar",
        temperature: 7.4,
      },
      {
        year: "2014",
        month: "Apr",
        temperature: 10.1,
      },
      {
        year: "2014",
        month: "May",
        temperature: 12.2,
      },
      {
        year: "2014",
        month: "Jun",
        temperature: 15.3,
      },
      {
        year: "2014",
        month: "Jul",
        temperature: 17.9,
      },
      {
        year: "2014",
        month: "Aug",
        temperature: 14.9,
      },
      {
        year: "2014",
        month: "Sep",
        temperature: 14.4,
      },
      {
        year: "2014",
        month: "Oct",
        temperature: 11.4,
      },
      {
        year: "2014",
        month: "Nov",
        temperature: 7.8,
      },
      {
        year: "2014",
        month: "Dec",
        temperature: 5.2,
      },
      {
        year: "2015",
        month: "Jan",
        temperature: 4.1,
      },
      {
        year: "2015",
        month: "Feb",
        temperature: 3.8,
      },
      {
        year: "2015",
        month: "Mar",
        temperature: 5.9,
      },
      {
        year: "2015",
        month: "Apr",
        temperature: 9.1,
      },
      {
        year: "2015",
        month: "May",
        temperature: 10.6,
      },
      {
        year: "2015",
        month: "Jun",
        temperature: 13.9,
      },
      {
        year: "2015",
        month: "Jul",
        temperature: 15.7,
      },
      {
        year: "2015",
        month: "Aug",
        temperature: 15.8,
      },
      {
        year: "2015",
        month: "Sep",
        temperature: 12.2,
      },
      {
        year: "2015",
        month: "Oct",
        temperature: 10.2,
      },
      {
        year: "2015",
        month: "Nov",
        temperature: 8.7,
      },
      {
        year: "2015",
        month: "Dec",
        temperature: 8.6,
      },
      {
        year: "2016",
        month: "Jan",
        temperature: 4.8,
      },
      {
        year: "2016",
        month: "Feb",
        temperature: 4.2,
      },
      {
        year: "2016",
        month: "Mar",
        temperature: 5.5,
      },
      {
        year: "2016",
        month: "Apr",
        temperature: 7,
      },
      {
        year: "2016",
        month: "May",
        temperature: 11.8,
      },
      {
        year: "2016",
        month: "Jun",
        temperature: 14.6,
      },
      {
        year: "2016",
        month: "Jul",
        temperature: 16.6,
      },
      {
        year: "2016",
        month: "Aug",
        temperature: 16.6,
      },
      {
        year: "2016",
        month: "Sep",
        temperature: 15.4,
      },
      {
        year: "2016",
        month: "Oct",
        temperature: 10.2,
      },
    ],
    series: [
      {
        type: "heatmap",
        xKey: "month",
        xName: "Month",
        yKey: "year",
        yName: "Year",
        colorKey: "temperature",
        colorName: "Temperature",
      },
    ],
  };
}
