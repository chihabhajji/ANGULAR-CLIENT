import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hr',
    loadChildren: () => import('@dashboard/modules/human_resources/human-resources.module').then(module => module.HumanResourcesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModulesRoutingModule { }
