import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchProductById, type Product } from '@/entities/product'
import { AddToCartButton } from '@/features/add-to-cart'
import { Price } from '@/shared/ui'

export function ProductPage() {
  const { productId } = useParams<{ productId: string }>()

  if (!productId) {
    return (
      <p className="page-status">
        Product not found. <Link to="/">Back to catalog</Link>
      </p>
    )
  }

  return <ProductDetail key={productId} productId={productId} />
}

interface ProductDetailProps {
  productId: string
}

function ProductDetail({ productId }: ProductDetailProps) {
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchProductById(productId).then((data) => {
      setProduct(data)
      setIsLoading(false)
    })
  }, [productId])

  if (isLoading) {
    return <p className="page-status">Loading product…</p>
  }

  if (!product) {
    return (
      <p className="page-status">
        Product not found. <Link to="/">Back to catalog</Link>
      </p>
    )
  }

  return (
    <article className="product-detail">
      <div className="product-detail__image" aria-hidden="true">
        {product.emoji}
      </div>
      <div className="product-detail__info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <Price amountInCents={product.priceInCents} />
        <AddToCartButton product={product} />
      </div>
    </article>
  )
}