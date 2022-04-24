import { useRouter } from "next/router"
import React, { ChangeEvent, useContext } from "react"
import SearchContext from "./context"
import { SearchContextProps, SearchProvider } from "./types"

const SearchProvider = (props: SearchProvider) => {
  const { children, regions = [] } = props
  const router = useRouter()
  const onChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    router.replace(`/regions/${value}`)
  }

  return (
    <SearchContext.Provider
      value={{
        onChangeFilter,
        regions,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext)
  return context
}

export default SearchProvider
