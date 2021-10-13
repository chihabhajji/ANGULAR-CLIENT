import {TreeNode} from "@models/ui/TreeNode";
import {Role} from "@models/User";
export const DASHBOARD_ROUTES: TreeNode[] = [
  // Icons can be found here : https://fonts.google.com/icons
  {
    name: 'Admin management',
    path: 'admin',
    authorizedRoles: [Role.SUPER_ADMIN],
    children: [
      {
        name: 'Users',
        path: 'users',
        children: [
          {name:'List', path:'admin/users/list', icon:'people'},
        ]
      }
    ]
  },
  {
    name: 'Human resources',
    path: '',
    children: [
      {
        name: 'projects',
        path: 'projects',
      },
      {
        name: 'add-project',
        path: 'add-project',
      },
      {
        name: 'edit-project',
        path: 'edit-project',
      }
    ]
  }
];
