import { Link } from 'react-router-dom'
import { useCart } from '@/entities/cart'
import { Button, Price } from '@/shared/ui'

export function CartPage() {
  const { items, removeItem, setQuantity, totalCents } = useCart()

  if (items.length === 0) {
    return (
      <p className="page-status">
        Your cart is empty. <Link to="/">Continue shopping</Link>
      </p>
    )
  }

  return (
    <div className="cart-page">
      <ul className="cart-list">
        {items.map((line) => (
          <li key={line.item.id} className="cart-line">
            <span className="cart-line__emoji" aria-hidden="true">
              {line.item.emoji}
            </span>
            <span className="cart-line__name">{line.item.name}</span>
            <input
              type="number"
              min={1}
              value={line.quantity}
              onChange={(event) => setQuantity(line.item.id, Number(event.target.value))}
              className="cart-line__quantity"
            />
            <Price amountInCents={line.item.priceInCents * line.quantity} />
            <Button variant="secondary" onClick={() => removeItem(line.item.id)}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <span>Total</span>
        <Price amountInCents={totalCents} />
      </div>
    </div>
  )
}