import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 900]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#2DF2FF',
        '#9183E6',
        '#FA61B5',
        '#E38E4D',
        '#FBE855'
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
