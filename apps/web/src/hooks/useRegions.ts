import { useQuery } from "@apollo/client"
import { QUERY_REGIONS } from "../services/graphql/queries/regions"
import { RegionResults } from "../services/graphql/queries/regions/types"

export function useRegions() {
  return useQuery<RegionResults>(QUERY_REGIONS)
}
