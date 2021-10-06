export class PaginationFilter {
  PageNumber: number;
  PageSize: number;
  SearchQuery: string;
  OrderBy: string;
  constructor(pageNumber: number,  pageSize?: number, searchQuery?: string, orderBy?: string) {
    this.PageNumber = pageNumber ?? pageNumber < 1 ? 1 : pageNumber;
    this.PageSize = pageSize ?? 10;
    this.SearchQuery = searchQuery ?? '';
    this.OrderBy = orderBy ?? '';
  }
}
