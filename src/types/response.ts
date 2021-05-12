export interface ApiBaseResponse<T> {
  data?: T
  status?: number
  error?: string
  page: number
  totalCount: number
  pageSize: number
}
export interface Params {
  // The search query.
  q?: string
  // The page of data to access. Defaults to 1.
  page: number
  // The maximum amount of cards to return.
  pageSize: number
}
