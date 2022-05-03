import { address, datatype, image, lorem } from "faker"
import { Home, HomeResults } from "../src/services/graphql/homes"

const home = (): Home => ({
  id: datatype.uuid(),
  bathroomsCount: datatype.number(),
  cityName: address.cityName(),
  hasPool: datatype.boolean(),
  maxOccupancy: datatype.number(),
  photos: [
    {
      url: image.imageUrl(),
    },
  ],
  regionName: address.state(),
  roomsCount: datatype.number(),
  stateCode: address.stateAbbr(),
  title: lorem.text(),
  seasonPricing: {
    highSeason: {
      maxPrice: datatype.number(),
      minPrice: datatype.number(),
    },
    lowSeason: {
      maxPrice: datatype.number(),
      minPrice: datatype.number(),
    },
  },
})

export const mockHomeResults = (
  count: number,
  totalCount?: number,
): { data: HomeResults } => {
  return {
    data: {
      homes: {
        count: totalCount || count,
        results: new Array(count).fill(null).map(home),
      },
    },
  }
}
