import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    data: { breadcrumb: 'Users' },
    loadChildren: () => import('@dashboard/modules/super_admin/user-management/user-management.module').then(m => m.UserManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
