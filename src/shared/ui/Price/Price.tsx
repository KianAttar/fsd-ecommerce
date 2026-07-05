import { formatCurrency } from '@/shared/lib'

interface PriceProps {
  amountInCents: number
}

export function Price({ amountInCents }: PriceProps) {
  return <span className="price">{formatCurrency(amountInCents)}</span>
}