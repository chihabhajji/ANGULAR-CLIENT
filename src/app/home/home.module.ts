import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomePageComponent} from "@app/home/home-page/home-page.component";
import { NavigationComponent } from './_navigation/navigation.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {BreadcrumbModule} from "@shared/components/breadcrumb/breadcrumb.module";

@NgModule({
  declarations: [
    HomePageComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    BreadcrumbModule
  ]
})
export class HomeModule { }
