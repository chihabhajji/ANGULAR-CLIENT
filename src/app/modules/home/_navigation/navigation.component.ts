import { Component, OnInit } from '@angular/core';
import {MatDrawerMode} from "@angular/material/sidenav";
import {Observable} from "rxjs";
import {Breadcrumb} from "@app/shared/_models/_ui/Breadcrumb";
import {BreadcrumbService} from "@app/shared/_services/breadcrumb.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isShowHideFlag: MatDrawerMode = "over";
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }

  ngOnInit(): void {
  }

}
