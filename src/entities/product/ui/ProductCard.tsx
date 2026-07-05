import type { ReactNode } from 'react'
import { Price } from '@/shared/ui'
import type { Product } from '../model/product'

interface ProductCardProps {
  product: Product
  actions?: ReactNode
  onSelect?: () => void
}

export function ProductCard({ product, actions, onSelect }: ProductCardProps) {
  return (
    <article className="product-card">
      <button type="button" className="product-card__info" onClick={onSelect} disabled={!onSelect}>
        <div className="product-card__image" aria-hidden="true">
          {product.emoji}
        </div>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <Price amountInCents={product.priceInCents} />
      </button>
      {actions && <div className="product-card__actions">{actions}</div>}
    </article>
  )
}