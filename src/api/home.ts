import { request } from '@/request'
import type { HomeCategories } from '@/types/home'

export const getHomeCategoriesData = () => {
  return request<HomeCategories[]>({
    url: '/home/categories'
  })
}
