import { gql } from "@apollo/client"

export const QUERY_HOMES = gql`
  {
    homes {
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
