import { QueryHookOptions, useQuery } from "@apollo/client"
import { SearchFilterOrder } from "../context/Search/types"
import { QUERY_HOMES } from "../services/graphql/queries/homes"
import { HomeResults } from "../services/graphql/queries/homes/types"

export function useHomes(
  options?: QueryHookOptions<
    HomeResults,
    {
      region?: string
      page?: number
      order?: SearchFilterOrder
    }
  >,
) {
  return useQuery<HomeResults>(QUERY_HOMES, options)
}
