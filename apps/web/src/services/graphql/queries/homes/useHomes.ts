import { QueryHookOptions, useQuery } from "@apollo/client"
import { SearchFilterOrder } from "../../../../context/Search/types"
import { QUERY_HOMES } from "./queries"
import { HomeResults } from "./types"

export function useHomes(
  options?: QueryHookOptions<
    HomeResults,
    {
      region?: string
      page?: number
      order?: SearchFilterOrder
      guests?: number
    }
  >,
) {
  return useQuery<HomeResults>(QUERY_HOMES, options)
}
