import { gql } from "@apollo/client"

export const QUERY_HOMES = gql`
  query QueryHomes($region: UUID) {
    homes(region: $region) {
      results {
        id
        title
        hasPool
        cityName
        stateCode
        regionName
        roomsCount
        maxOccupancy
        photos {
          url
        }
      }
    }
  }
`
