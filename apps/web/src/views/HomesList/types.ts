import { Home } from "../../services/graphql/queries/homes/types"
import { Region } from "../../services/graphql/queries/regions/types"

export interface ViewHomesListProps {
  homes: Home[]
  regions: Region[]
}
