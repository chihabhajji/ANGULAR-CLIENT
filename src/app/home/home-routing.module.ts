import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavigationComponent} from "@app/home/_navigation/navigation.component";
import {HomePageComponent} from "@app/home/home-page/home-page.component";

const routes: Routes = [
  {
    path: '', component: NavigationComponent , data: {breadcrumb: 'Home'} , children: [
      {path: '', component: HomePageComponent },
      { path: 'authentication', loadChildren: () => import('@shared/components/account/account.module').then(m => m.AccountModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
