import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "@app/modules/home/login/login.component";
import {RegisterComponent} from "@app/modules/home/register/register.component";
import {NavigationComponent} from "@app/modules/home/_navigation/navigation.component";
import {HomePageComponent} from "@app/modules/home/home-page/home-page.component";

const routes: Routes = [
  {
    path: '', component: NavigationComponent , children: [
      {path: '', component: HomePageComponent, data: {breadcrumb: 'Home'} },
      {path: 'login',  pathMatch:'full', component: LoginComponent, data: {breadcrumb: 'Login'}},
      {path: 'register',  pathMatch:'full', component: RegisterComponent, data: {breadcrumb: 'Register'}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
