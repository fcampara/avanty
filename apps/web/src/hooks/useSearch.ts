import { useContext } from "react"
import { SearchContext } from "../context/Search"
import { SearchContextProps } from "../context/Search/types"

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext)
  return context
}
