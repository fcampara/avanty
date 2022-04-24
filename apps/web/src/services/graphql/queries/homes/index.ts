import { gql } from "@apollo/client"
import { Home } from "./types"

export interface HomeResults {
  homes: {
    results: Home[]
  }
}

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
