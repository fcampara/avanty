import { QueryHookOptions, useQuery } from "@apollo/client"
import { QUERY_HOMES } from "./queries"
import { HomeResults, HomeVariables } from "./types"

export function useHomes(
  options?: QueryHookOptions<HomeResults, HomeVariables>,
) {
  return useQuery<HomeResults>(QUERY_HOMES, options)
}
