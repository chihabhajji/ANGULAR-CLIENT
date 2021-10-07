import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from "@app/shared/components/error/error.component";

// , canLoad: : [AuthGuard]
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home',  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  { path: 'dashboard',  loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: '**', component: ErrorComponent , data: { breadcrumb: 'Error' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
