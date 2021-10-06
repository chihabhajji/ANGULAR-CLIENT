import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavigationComponent} from "@app/shared/components/navigation/navigation.component";
import {DashboardComponent} from "@app/dashboard/dashboard.component";
import {ErrorComponent} from "@app/shared/components/error/error.component";
import {HomePageComponent} from "@app/shared/components/home-page/home-page.component";
import {LoginComponent} from "@app/shared/components/login/login.component";
import {RegisterComponent} from "@app/shared/components/register/register.component";



const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomePageComponent ,  data: { breadcrumb: 'Home' } },
  {path: 'login', pathMatch: 'full', component: LoginComponent ,  data: { breadcrumb: 'Login' } },
  {path: 'register', pathMatch: 'full', component: RegisterComponent ,  data: { breadcrumb: 'Register' } },
  {
    // , canActivate: [AuthGuard]
    path: 'dashboard', component: NavigationComponent ,children: [
      {
        path: '',
        component: DashboardComponent,
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'users',
        data: { breadcrumb: 'Users' },
        loadChildren: () => import('@app/modules/user-management/user-management.module').then(m => m.UserManagementModule)
      },
      { path: '**', component: ErrorComponent , data: { breadcrumb: 'Error' } }
    ]
  },
  {path: '**', component: ErrorComponent , data: { breadcrumb: 'Error' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
