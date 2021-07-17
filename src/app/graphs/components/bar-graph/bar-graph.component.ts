import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  @Input() barChartLabels: Label[] = [];//'2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    /*{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#56B3FD', hoverBackgroundColor: 'red' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#A483E6', hoverBackgroundColor: 'red' },
    { data: [8, 4, 40, 19, 8, 100, 90], label: 'Series C', backgroundColor: '#FA61B5', hoverBackgroundColor: 'red' }*/
  ];

  ngOnInit(){
    this.horizontal ? this.barChartType = 'horizontalBar' : this.barChartType = 'bar';  
  }

  public randomize(): void {
    
    this.barChartData.forEach( (chart, index) => {
      this.barChartData[index].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ];
    });
  }
}
