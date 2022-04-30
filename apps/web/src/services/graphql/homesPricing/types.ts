import { HomeVariablePeriod } from "../homes/types"

export type HomePricingVariables = {
  ids?: string[]
  period?: HomeVariablePeriod
}

export interface HomePricing {
  homeId: string
  numberOfNights: number
  total: number
}

export interface HomesPricingResults {
  homesPricing: HomePricing[]
}
