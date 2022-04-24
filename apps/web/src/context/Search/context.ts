import { createContext } from "react"
import { SearchContextProps } from "./types"

const searchContext = createContext<SearchContextProps>(
  {} as SearchContextProps,
)

export default searchContext
