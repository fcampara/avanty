import { QueryHookOptions, useQuery } from "@apollo/client"
import { QUERY_HOMES } from "../services/graphql/queries/homes"
import { HomeResults } from "../services/graphql/queries/homes/types"

export function useHomes(
  options?: QueryHookOptions<
    HomeResults,
    {
      region?: string
    }
  >,
) {
  return useQuery<HomeResults>(QUERY_HOMES, options)
}
