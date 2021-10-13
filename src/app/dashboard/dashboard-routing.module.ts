import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardNavigationComponent } from "@dashboard/_navigation/dashboard-navigation.component";
import {UserProfileComponent} from "@app/dashboard/shared/current-user-profile/user_profile.component";
import {ChatComponent} from "@dashboard/shared/chat/chat.component";

export const dashboardRoutes: Routes = [
  { path: 'authentication', data: {breadcrumb: 'Authentication' },loadChildren: () => import('@shared/components/account/account.module').then(m => m.AccountModule)},
  {
    path: '',  component: DashboardNavigationComponent, data: { breadcrumb: 'Dashboard' } , children: [
      {
        path: '',
        component: DashboardComponent,
        data: { breadcrumb: null }
      },
			{
				path: 'chat',
				component: ChatComponent,
				data: { breadcrumb: 'Chat'}
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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
