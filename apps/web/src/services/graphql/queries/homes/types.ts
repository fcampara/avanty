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
    results: Home[]
  }
}
