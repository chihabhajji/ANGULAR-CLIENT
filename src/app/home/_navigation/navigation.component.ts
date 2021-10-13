import { Component, OnInit } from '@angular/core';
import {MatDrawerMode} from "@angular/material/sidenav";
import {Observable} from "rxjs";
import {Breadcrumb} from "@models/ui/Breadcrumb";
import {BreadcrumbService} from "@services/breadcrumb.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
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
