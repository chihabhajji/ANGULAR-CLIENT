import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './pages/add-job/add-job.component';
import { ApplicantListComponent } from './pages/applicant-list/applicant-list.component';
import { RequirementsComponent } from './pages/requirements/requirements.component';

const routes: Routes = [
  { path: 'add-job', component: AddJobComponent },
  { path: 'requirements', component: RequirementsComponent },
  { path: 'applicant-list', component: ApplicantListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobRoutingModule {}
