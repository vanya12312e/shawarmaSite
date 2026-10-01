import { createClient } from '@/utils/supubase/client'
import { Product } from './types'

export const productsApi = {
  async getAll(): Promise<Product[]> {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id', { ascending: true })

    if (error) {
      console.error('[productsApi] Error fetching products:', error)
      throw new Error('Failed to fetch products')
    }

    return (data ?? []) as Product[]
  },

  async getByCategory(category: Product['category']): Promise<Product[]> {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .order('id', { ascending: true })

    if (error) {
      console.error('[productsApi] Error fetching products by category:', error)
      throw new Error('Failed to fetch products')
    }

    return (data ?? []) as Product[]
  },
}