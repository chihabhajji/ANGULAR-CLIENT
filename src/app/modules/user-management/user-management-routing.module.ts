import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersListComponent} from "@app/modules/user-management/users-list/users-list/users-list.component";

const routes: Routes = [
  // canActivate: [AuthGuard], data: {roles: [Role.SUPER_ADMIN]}
  {path: 'list', component: UsersListComponent , data: { breadcrumb: 'List' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
