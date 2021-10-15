import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from "@shared/components/error/error.component";
import {LoginComponent} from "@shared/components/login/login.component";
import {AuthGuard} from "@shared/_helpers/auth.guard";
//canActivate: [AuthGuard]
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
	{ path: 'login', pathMatch: 'full', component: LoginComponent},
  { path: 'dashboard',loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
	{ path: '**', component: ErrorComponent , data: { breadcrumb: 'Error' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
