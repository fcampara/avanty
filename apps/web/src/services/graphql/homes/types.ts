export type HomeVariableOrder = "RELEVANCE" | "PRICE_DESC" | "PRICE_ASC"
export type HomeVariablePeriod = {
  checkIn?: string
  checkOut?: string
}
export type HomeVariables = {
  region?: string
  page?: number
  order?: HomeVariableOrder
  guests?: number
  period?: HomeVariablePeriod
}

type HomePriceRange = {
  minPrice: number
  maxPrice: number
}

type HomeSeasonPrice = {
  highSeason: HomePriceRange
  lowSeason: HomePriceRange
}

type HomePhoto = {
  url: string
}

export interface Home {
  id: string
  title: string
  hasPool: boolean
  cityName: string
  stateCode: string
  regionName: string
  roomsCount: number
  bathroomsCount: number
  maxOccupancy: number
  photos: HomePhoto[]
  seasonPricing?: HomeSeasonPrice
}

export interface HomeResults {
  homes: {
    count: number
    results: Home[]
  }
}
