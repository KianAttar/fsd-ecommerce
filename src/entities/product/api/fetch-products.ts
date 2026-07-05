import { withNetworkDelay } from '@/shared/api'
import type { Product } from '../model/product'

const CATALOG: Product[] = [
  { id: 'p1', name: 'Wireless Headphones', description: 'Noise-cancelling, 30h battery.', priceInCents: 8999, emoji: '🎧' },
  { id: 'p2', name: 'Mechanical Keyboard', description: 'Hot-swappable switches, per-key RGB.', priceInCents: 12999, emoji: '⌨️' },
  { id: 'p3', name: 'Ceramic Mug', description: 'Holds 350ml, dishwasher safe.', priceInCents: 1499, emoji: '☕' },
  { id: 'p4', name: 'Desk Lamp', description: 'Adjustable warmth, USB-C powered.', priceInCents: 3499, emoji: '💡' },
  { id: 'p5', name: 'Canvas Backpack', description: 'Water-resistant, fits a 15" laptop.', priceInCents: 5999, emoji: '🎒' },
  { id: 'p6', name: 'Potted Plant', description: 'Low-maintenance, air-purifying.', priceInCents: 2499, emoji: '🪴' },
]

export function fetchProducts(): Promise<Product[]> {
  return withNetworkDelay(CATALOG)
}

export function fetchProductById(id: string): Promise<Product | undefined> {
  return withNetworkDelay(CATALOG.find((product) => product.id === id))
}