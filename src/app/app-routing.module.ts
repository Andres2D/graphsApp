import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'graph',
    loadChildren: () => import('./graphs/graphs.module').then( m => m.GraphsModule)
  },
  {
    path: '**',
    redirectTo: 'graph'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
