import { Component, AfterViewInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-google',
  template: `
    <p>Google Chart Example</p>
    <div id="chart_div"></div>
    <div class="flex flex-col gap-y-2 p-4">
      <div class="text-3xl">Notes</div>
      <div class="text-sm text-gray-700">JS based</div>
      <div class="text-sm text-gray-700">Id a div and have google charts draw inside it</div>
  </div>
  `
})
export class GoogleComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Load Google Charts library and set a callback to drawChart
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => this.drawChart());
  }

  drawChart = () => {
    // Create the data table
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);

    // Set chart options
    const options = {
      title: 'How Much Pizza I Ate Last Night',
      width: 400,
      height: 300
    };

    // Instantiate and draw the chart
    const chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  };
}
