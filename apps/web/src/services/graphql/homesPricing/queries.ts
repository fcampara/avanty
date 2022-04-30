import { gql } from "@apollo/client"

export const QUERY_HOMES_PRICING = gql`
  query QueryHomesPricing($ids: [UUID]!, $period: BookingPeriod!) {
    homesPricing(ids: $ids, period: $period) {
      homeId
      numberOfNights
      total
    }
  }
`
