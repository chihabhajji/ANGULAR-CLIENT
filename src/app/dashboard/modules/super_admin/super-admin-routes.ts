import {TreeNode} from "@models/ui/TreeNode";

export const SuperAdminRoutes: TreeNode = {
  icon: "",
  name: "admin",
  path: "admin",
  children: [
    {
      icon: "users",
      name: "users",
      path: "users/list",
    }
  ],
}
