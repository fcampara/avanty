import { ChangeEvent, ReactNode } from "react"
import { Region } from "../../services/graphql/queries/regions/types"

export interface SearchContextProps {
  onChangeFilter?: (event: ChangeEvent<HTMLSelectElement>) => void
  regions: Region[]
  filter: {
    region?: Region
  }
}

export interface SearchProvider {
  regions: Region[]
  children: ReactNode
}
