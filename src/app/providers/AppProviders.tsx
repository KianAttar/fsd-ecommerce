import type { ReactNode } from 'react'
import { CartProvider } from '@/entities/cart'

export function AppProviders({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>
}