import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from "@app/services/auth.service";
import {FlatTreeControl} from "@angular/cdk/tree";
import {TreeNode} from "@app/shared/models/_ui/TreeNode";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {BreadcrumbService} from "@app/shared/_services/breadcrumb.service";
import {Breadcrumb} from "@app/shared/models/_ui/Breadcrumb";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  async logout(): Promise<void> {
    await this.authService.logout();
  }
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  path: string;
  icon: string;
}
const TREE_DATA: TreeNode[] = [
  /* TODO : ADD YOUR NAVIGATIONS HERE*/
  // Icons can be found here : https://fonts.google.com/icons
  {
    name: 'Users',
    path: '/dashboard/users',
    children: [
      {name:'List',path:'users/list', icon:'people'},
    ]
  }
];
@Component({
  selector: 'app-tree-flat-overview',
  templateUrl: 'tree-flat-overview.html',
  styleUrls: ['tree-flat-overview.css'],
})
export class TreeFlatOverviewComponent {
  private _transformer = (node: TreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      path: node.path,
      icon: node.icon ?? ''
    };
  }
  constructor() {this.dataSource.data = TREE_DATA;}
  treeControl = new FlatTreeControl<FlatNode>(node => node.level, node => node.expandable);
  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: FlatNode) => node.expandable;
}
