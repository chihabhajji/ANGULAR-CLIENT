import {Role} from "@models/User";

export interface TreeNode {
  name: string;
  path: string;
  children?: TreeNode[];
  icon?: string;
  authorizedRoles?: Role[];
}

export interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  path: string;
  icon: string;
  visible: boolean;
}
