export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: Array<Role>;
  password?: string;
  token?: string;
}

export enum Role {
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export function ROLES(): Role[] {
  return [
    Role.SUPER_ADMIN,
  ];
}
export function containsRole(role: Role, roles: Role[]): boolean{
  return  roles.indexOf(role) !== -1;
}
export function displayRole(role: Role): string{
  switch (role){
    case (Role.SUPER_ADMIN) : return 'Super admin';
    default: return 'undefined role';
  }
}

