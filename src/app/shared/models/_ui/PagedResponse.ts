export interface PagedResponse<T>{
  Data: T[];
  PageNumber: number;
  PageSize: number;
  TotalPages: number ;
  TotalRecords: number;
  Succeeded: boolean;
  Errors: string[];
  Message: string;
}
