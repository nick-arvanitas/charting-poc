import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'hc-donut',
  imports: [HighchartsChartModule],
  template: `
<highcharts-chart
  [Highcharts]="Highcharts"
  [options]="chartOptions"
  class="w-full block"
></highcharts-chart>
  `,
})


export class HcDonutComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      spacing: [8,0,0,2],
      events: {
        render() {
          const chart = this,

          customLabel =
              chart.renderer.label(
                  '$100,000'
              , 3)
                  .css({
                      color: '#000',
                      textAnchor: 'middle'
                  })
                  .add();

          const x = chart.series[0].center[0] + chart.plotLeft,
              y = chart.series[0].center[1] + chart.plotTop -
              (Number(customLabel.attr('height')) / 2);

          customLabel.attr({
              x,
              y
          });
          // Set font size based on chart diameter
          customLabel.css({
              fontSize: `${chart.series[0].center[2] / 12}px`
          });
      }
      }
    },
    credits: {
      text: ''
  },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: [{
          enabled: false,
        }, {
          enabled: false,
        }],
        showInLegend: true
      }
    } as Highcharts.PlotOptions,
    series: [{
      name: 'Registrations',
      innerSize: '90%',
      data: [{
        name: 'EV',
        y: 23.9
      }, {
        name: 'Hybrids',
        y: 12.6
      }, {
        name: 'Diesel',
        y: 37.0
      }, {
        name: 'Petrol',
        y: 26.4
      }]
    }] as Highcharts.SeriesPieOptions[]
  }
}
