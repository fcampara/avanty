type PriceDetailSeason = "low" | "high"

export interface PriceDetailSeasonArrowProps {
  season: PriceDetailSeason
}

export interface PriceDetailProps {
  price?: number | number[]
  perNight?: number
  nights?: number
  season?: PriceDetailSeason
}
