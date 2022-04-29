import { gql } from "@apollo/client"

export const QUERY_HOMES = gql`
  query QueryHomes($region: UUID, $page: Int) {
    homes(region: $region, pageSize: 10, page: $page) {
      results {
        id
        title
        hasPool
        cityName
        stateCode
        regionName
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
