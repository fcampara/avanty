import { QueryHookOptions, useQuery } from "@apollo/client"
import { QUERY_HOMES_PRICING } from "./queries"
import { HomePricing, HomePricingVariables } from "./types"

export function useHomesPricing(
  options?: QueryHookOptions<HomePricing, HomePricingVariables>,
) {
  return useQuery<HomePricing>(QUERY_HOMES_PRICING, options)
}
