import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { EditClientComponent } from './pages/edit-client/edit-client.component';

const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'edit-client', component: EditClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
