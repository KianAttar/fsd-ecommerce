import { createContext, useContext, useMemo, useReducer, type ReactNode } from 'react'

export interface CartLineItem {
  id: string
  name: string
  priceInCents: number
  emoji: string
}

export interface CartItem {
  item: CartLineItem
  quantity: number
}

type CartAction =
  | { type: 'add'; item: CartLineItem }
  | { type: 'remove'; itemId: string }
  | { type: 'setQuantity'; itemId: string; quantity: number }

function cartReducer(items: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'add': {
      const existing = items.find((line) => line.item.id === action.item.id)
      if (existing) {
        return items.map((line) =>
          line.item.id === action.item.id ? { ...line, quantity: line.quantity + 1 } : line,
        )
      }
      return [...items, { item: action.item, quantity: 1 }]
    }
    case 'remove':
      return items.filter((line) => line.item.id !== action.itemId)
    case 'setQuantity':
      if (action.quantity <= 0) {
        return items.filter((line) => line.item.id !== action.itemId)
      }
      return items.map((line) =>
        line.item.id === action.itemId ? { ...line, quantity: action.quantity } : line,
      )
    default:
      return items
  }
}

interface CartContextValue {
  items: CartItem[]
  addItem: (item: CartLineItem) => void
  removeItem: (itemId: string) => void
  setQuantity: (itemId: string, quantity: number) => void
  totalCount: number
  totalCents: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [] as CartItem[])

  const value = useMemo<CartContextValue>(() => {
    const totalCount = items.reduce((sum, line) => sum + line.quantity, 0)
    const totalCents = items.reduce((sum, line) => sum + line.quantity * line.item.priceInCents, 0)
    return {
      items,
      addItem: (item) => dispatch({ type: 'add', item }),
      removeItem: (itemId) => dispatch({ type: 'remove', itemId }),
      setQuantity: (itemId, quantity) => dispatch({ type: 'setQuantity', itemId, quantity }),
      totalCount,
      totalCents,
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components -- provider and its hook are one cohesive domain concern (see FSD single-concern-segment naming), kept in one file intentionally
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}