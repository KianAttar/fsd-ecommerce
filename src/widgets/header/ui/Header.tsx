import { Link } from 'react-router-dom'
import { useCart } from '@/entities/cart'

export function Header() {
  const { totalCount } = useCart()

  return (
    <header className="header">
      <Link to="/" className="header__brand">
        FSD Store
      </Link>
      <nav className="header__nav">
        <Link to="/cart" className="header__cart-link">
          Cart
          {totalCount > 0 && <span className="header__cart-badge">{totalCount}</span>}
        </Link>
      </nav>
    </header>
  )
}