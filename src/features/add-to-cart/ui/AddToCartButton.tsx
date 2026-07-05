import { Button } from '@/shared/ui'
import { useCart } from '@/entities/cart'
import type { Product } from '@/entities/product'

interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart()

  return (
    <Button
      onClick={() =>
        addItem({
          id: product.id,
          name: product.name,
          priceInCents: product.priceInCents,
          emoji: product.emoji,
        })
      }
    >
      Add to cart
    </Button>
  )
}