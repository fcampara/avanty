type PriceRange = {
  minPrice: number
  maxPrice: number
}

type PriceDetailSeason = "low" | "high"

export interface PriceDetailSeasonArrowProps {
  season: PriceDetailSeason
}

export interface PriceDetailSeasonProps {
  price?: number | number[]
  perNight?: number
  nights?: number
  season?: PriceDetailSeason
}
