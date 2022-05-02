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

export type PriceDetailAmountProps = Pick<PriceDetailSeasonProps, "price">
export type PriceDetailNightProps = Pick<PriceDetailSeasonProps, "nights">
