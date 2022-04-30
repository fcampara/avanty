import { gql } from "@apollo/client"

export const QUERY_HOMES = gql`
  query QueryHomes(
    $region: UUID
    $page: Int
    $order: HomesOrder
    $guests: Int
  ) {
    homes(
      region: $region
      pageSize: 10
      page: $page
      order: $order
      guests: $guests
    ) {
      results {
        id
        title
        hasPool
        cityName
        stateCode
        regionName
        bathroomsCount
        roomsCount
        maxOccupancy
        seasonPricing {
          highSeason {
            minPrice
            maxPrice
          }
          lowSeason {
            minPrice
            maxPrice
          }
        }
        photos {
          url
        }
      }
    }
  }
`
