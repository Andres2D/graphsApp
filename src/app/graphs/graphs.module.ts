import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsRoutingModule } from './graphs-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDuobleComponent } from './pages/bars-duoble/bars-duoble.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BarsComponent, 
    BarsDuobleComponent, 
    DonutComponent, 
    DonutHttpComponent, 
    BarGraphComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    ChartsModule
  ]
})
export class GraphsModule { }
