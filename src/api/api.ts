const mockFetch = (url: string, params?: any): any => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('success')
    }, 2000)
  })
}

export const Api = {
  post: async (url: string, params?: any) => {
    return mockFetch(url, { method: 'POST', ...params })
  },
}
