export class PaginationParams {
  constructor(
    readonly page: number,
    readonly pageSize: number,
    readonly order?: 'asc' | 'desc',
  ) { }
}
