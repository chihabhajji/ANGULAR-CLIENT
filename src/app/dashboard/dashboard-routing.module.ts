import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardNavigationComponent } from "@dashboard/../shared/components/navigation/dashboard-navigation.component";
import {UserProfileComponent} from "@app/dashboard/components/current-user-profile/user_profile.component";

import {ErrorComponent} from "@shared/components/error/error.component";
import {LoginComponent} from "@dashboard/../shared/components/login/login.component";

export const dashboardRoutes: Routes = [
  { path: 'login', pathMatch:'full', component: LoginComponent},
  {
    path: '',  component: DashboardNavigationComponent, data: { breadcrumb: 'Dashboard' } , children: [
      {
        path: '',
        component: DashboardComponent,
        data: { breadcrumb: null }
      },
      {
        path: 'admin',
        data: { breadcrumb: 'Admin management' },
        loadChildren: () => import('@app/dashboard/modules/super_admin/super-admin.module').then(m => m.SuperAdminModule)
      },
      {
        path: 'me',
        component: UserProfileComponent,
        data: { breadcrumb: 'My profile' }
      },
      {
        path: 'profile/{id}',
        component: UserProfileComponent,
        data: { breadcrumb: 'User profile' }
      },
      {
        path: 'services',
        loadChildren: () => import('@dashboard/modules/dashboard-modules.module').then(m => m.DashboardModulesModule)
      },
			{ path: '**', component: ErrorComponent , data: { breadcrumb: 'Error' } },
    ]
  },
	{ path: '**', component: ErrorComponent , data: { breadcrumb: 'Error' } },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
