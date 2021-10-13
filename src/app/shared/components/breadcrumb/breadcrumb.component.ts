import {Component,  OnInit} from '@angular/core';
import {BreadcrumbService} from "@services/breadcrumb.service";
import {Observable} from "rxjs";
import {Breadcrumb} from "@models/ui/Breadcrumb";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(public readonly breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
  }

}
