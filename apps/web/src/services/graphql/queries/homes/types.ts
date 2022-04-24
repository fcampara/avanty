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
}

export interface HomeResults {
  homes: {
    results: Home[]
  }
}
