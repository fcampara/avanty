import { ChangeEvent, ReactNode } from "react"
import { Region } from "../../services/graphql/queries/regions/types"

export type SearchFilterName = "regions" | "order"
export type SearchFilterOrder = "RELEVANCE" | "PRICE_DESC" | "PRICE_ASC"

export interface SearchContextProps {
  onChangeFilter: (
    event: ChangeEvent<HTMLSelectElement>,
    filterName: SearchFilterName,
  ) => void
  regions: Region[]
  filter: {
    region?: Region,
    order: SearchFilterOrder
  }
}

export interface SearchProvider {
  regions: Region[]
  children: ReactNode
}
