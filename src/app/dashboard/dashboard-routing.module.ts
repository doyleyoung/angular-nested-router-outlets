import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DangerComponent} from '../danger/danger.component';
import {WarningComponent} from '../warning/warning.component';
import {InfoComponent} from '../info/info.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'show',
        component: DashboardComponent,
        children: [
          {
            path: 'info',
            component: InfoComponent,
          },
          {
            path: 'warning',
            component: WarningComponent,
            outlet: 'warning'
          },
          {
            path: 'danger',
            component: DangerComponent,
            outlet: 'danger'
          }
        ]
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
