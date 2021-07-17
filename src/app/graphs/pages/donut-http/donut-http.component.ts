import { Component, OnInit } from '@angular/core';
import { GraphsService } from '../../services/graphs.service';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styleUrls: ['./donut-http.component.css']
})
export class DonutHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100, 900]
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

  constructor(private _graphService: GraphsService) { }

  ngOnInit() {
    /*this._graphService.GetUserDataMedia()
      .subscribe( data => {
        const labels = Object.keys(data);
        const values = Object.values(data);

        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
    });*/

    this._graphService.GetUserDataMediaV2()
    .subscribe( ({labels, values }) => {
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
    })
  }

}
