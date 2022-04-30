import { QueryHookOptions, useQuery } from "@apollo/client"
import { QUERY_HOMES_PRICING } from "./queries"
import { HomesPricingResults, HomePricingVariables } from "./types"

export function useHomesPricing(
  options?: QueryHookOptions<HomesPricingResults, HomePricingVariables>,
) {
  return useQuery<HomesPricingResults>(QUERY_HOMES_PRICING, options)
}
