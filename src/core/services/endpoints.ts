// Helper function to build endpoint URLs
export function buildUrl(
  template: string,
  params: Record<string, string | number>
): string {
  return Object.entries(params).reduce(
    (url, [key, value]) => url.replace(`:${key}`, String(value)),
    template
  )
}

// Query parameter helpers
export function buildQueryString(params: Record<string, unknown>): string {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((v) => searchParams.append(key, String(v)))
      } else {
        searchParams.set(key, String(value))
      }
    }
  })

  const queryString = searchParams.toString()
  return queryString ? `?${queryString}` : ''
}
