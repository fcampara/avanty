import { ReactNode } from "react"
import {
  HomeVariableOrder,
  HomeVariablePeriod,
} from "../../services/graphql/homes/types"
import { Region } from "../../services/graphql/regions/types"

export type SearchFilterName =
  | "regions"
  | "order"
  | "guests"
  | "checkIn"
  | "checkOut"
export type SearchFilterOrder = "RELEVANCE" | "PRICE_DESC" | "PRICE_ASC"

export interface SearchContextProps {
  onChangeFilter: (value: string, filterName: SearchFilterName) => void
  setFilter: (filterName: string) => void
  clearFilters: () => void
  regions: Region[]
  filter: {
    region?: Region
    guests?: string
    order: HomeVariableOrder
    period?: HomeVariablePeriod
  }
}

export interface SearchProviderProps {
  regions: Region[]
  children: ReactNode
}
