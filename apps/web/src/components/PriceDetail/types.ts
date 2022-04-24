type PriceRange = {
  minPrice: number
  maxPrice: number
}

type PriceDetailSeason = "low" | "high"

export interface PriceDetailSeasonArrowProps {
  season: PriceDetailSeason
}

export interface PriceDetailSeasonProps {
  range?: PriceRange
  price?: number | number[]
  perNight?: number
  nights?: number
  subtitle?: string
  season?: PriceDetailSeason
}
