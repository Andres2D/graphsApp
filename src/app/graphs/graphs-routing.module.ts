import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDuobleComponent } from './pages/bars-duoble/bars-duoble.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bar',
        component: BarsComponent
      },
      {
        path: 'bar-double',
        component: BarsDuobleComponent
      },
      {
        path: 'donut',
        component: DonutComponent
      },
      {
        path: 'donut-http',
        component: DonutHttpComponent
      },
      {
        path: '**',
        redirectTo: 'bar'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule { }
