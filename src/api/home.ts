import { request } from '@/request/server'
import type { HomeCategories } from '@/types/home'

export const getHomeCategoriesData = () => {
  return request<HomeCategories[]>({
    url: '/home/categories'
  })
}
