import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public lineChartLabels: Label[] =
    [
      'T - 21', 'T - 20', 'T - 19', 'T - 18', 'T - 17', 'T - 16', 'T - 15', 'T - 14', 'T - 13', 'T - 12', 'T - 11', 'T - 10', 'T - 9', 'T - 8', 'T - 7', 'T - 6', 'T - 5', 'T - 4', 'T - 3', 'T - 2', 'T - 1',
    ];

  public lineChartData: ChartDataSets[] =
    [
      {
        label: 'Đà tăng',
        data:
          [
            6.10, 6.10, 7.00, 7.40, 7.60, 7.90, 8.30, 7.90, 8.40, 8.40, 7.90, 7.80, 8.10, 7.20, 7.60, 7.10, 4.20, 3.10, 4.20, 4.70, 4.40,
          ]
      },
      {
        label: 'Tích lũy',
        data:
          [
            9.40, 9.40, 9.60, 9.50, 9.60, 9.40, 9.10, 9.40, 9.50, 9.60, 9.50, 9.50, 9.70, 9.50, 9.50, 9.50, 5.90, 2.90, 4.10, 5.00, 4.40,
          ]
      },
    ];

  public lineChartOptions: ChartOptions = {
    responsive: false,
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }
}
