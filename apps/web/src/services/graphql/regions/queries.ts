import { gql } from "@apollo/client"

export const QUERY_REGIONS = gql`
  {
    regions {
      id
      name
      stateName
    }
  }
`
