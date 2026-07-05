import { createBrowserRouter } from 'react-router-dom'
import { CatalogPage } from '@/pages/catalog'
import { ProductPage } from '@/pages/product'
import { CartPage } from '@/pages/cart'
import { RootLayout } from './RootLayout'

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        { path: '/', element: <CatalogPage /> },
        { path: '/products/:productId', element: <ProductPage /> },
        { path: '/cart', element: <CartPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)