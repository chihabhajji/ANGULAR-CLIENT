import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {LoginComponent} from "@app/modules/home/login/login.component";
import {RegisterComponent} from "@app/modules/home/register/register.component";
import {HomePageComponent} from "@app/modules/home/home-page/home-page.component";
import { NavigationComponent } from './_navigation/navigation.component';
import {CollapseModule} from "ngx-bootstrap/collapse";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    HomePageComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CollapseModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
