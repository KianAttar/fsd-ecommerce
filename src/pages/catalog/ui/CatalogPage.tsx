import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchProducts, ProductCard, type Product } from '@/entities/product'
import { AddToCartButton } from '@/features/add-to-cart'

export function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <p className="page-status">Loading products…</p>
  }

  return (
    <div className="catalog-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          actions={<AddToCartButton product={product} />}
          onSelect={() => navigate(`/products/${product.id}`)}
        />
      ))}
    </div>
  )
}