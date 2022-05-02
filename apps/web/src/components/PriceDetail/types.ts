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

export type PriceDetailAmountProps = Pick<PriceDetailProps, "price">
export type PriceDetailNightProps = Pick<PriceDetailProps, "nights">
export type PriceDetailPerNightProps = Pick<PriceDetailProps, "perNight">
export type PriceDetailSeasonProps = Pick<PriceDetailProps, "season">
