// Common API response structure
export interface BaseAxiosResponse<T = unknown> {
  data: T
  message: string
  success: boolean
}

// Error response structure
export interface BaseAxiosError {
  message: string
  code: string
  details?: Record<string, unknown>
}

// Pagination structure
export interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

// Generic list response
export interface ListResponse<T> {
  items: T[]
  pagination: Pagination
}

// Base service configuration
export interface BaseServiceOptions<T> {
  endpoint: string
  queryKey: string[]
  defaultSort?: string
  defaultFilters?: Record<string, unknown>
  onSuccess?: (data: T) => void
  onError?: (error: Error) => void
}

// Pagination parameters
export interface BasePaginationParams {
  page?: number
  limit?: number
  sort?: string
  order?: 'asc' | 'desc'
  search?: string
  filters?: Record<string, unknown>
}

// Pagination response structure
export interface BasePaginationResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}
