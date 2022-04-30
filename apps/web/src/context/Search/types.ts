import { ReactNode } from "react"
import { Region } from "../../services/graphql/queries/regions/types"

export type SearchFilterName = "regions" | "order" | "guests"
export type SearchFilterOrder = "RELEVANCE" | "PRICE_DESC" | "PRICE_ASC"

export interface SearchContextProps {
  onChangeFilter: (value: string, filterName: SearchFilterName) => void
  setFilter: (filterName: string) => void
  clearFilters: () => void
  regions: Region[]
  filter: {
    region?: Region
    guests?: string
    order: SearchFilterOrder
  }
}

export interface SearchProvider {
  regions: Region[]
  children: ReactNode
}
