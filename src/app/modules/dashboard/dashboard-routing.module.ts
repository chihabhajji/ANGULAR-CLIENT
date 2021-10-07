import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NavigationComponent } from "@app/modules/dashboard/_navigation/navigation.component";

const routes: Routes = [
  {
    path: '',  component: NavigationComponent , children: [
      {
        path: '',
        component: DashboardComponent,
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'users',
        data: { breadcrumb: 'Users' },
        loadChildren: () => import('@app/modules/dashboard/user-management/user-management.module').then(m => m.UserManagementModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
