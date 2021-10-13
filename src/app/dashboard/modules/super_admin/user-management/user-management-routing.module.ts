import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from "@dashboard/modules/super_admin/user-management/users-list/users-list/users-list.component";

const routes: Routes = [
  // canActivate: [AuthGuard], data: {roles: [Role.SUPER_ADMIN]}
  { path: '' , pathMatch: 'full', redirectTo: 'list'},
  { path: 'list', pathMatch: 'full', component: UsersListComponent , data: { breadcrumb: null } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
