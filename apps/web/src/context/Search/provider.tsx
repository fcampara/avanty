import { useRouter } from "next/router"
import React, { ChangeEvent, useContext, useMemo } from "react"
import SearchContext from "./context"
import { SearchContextProps, SearchProvider } from "./types"

const SearchProvider = (props: SearchProvider) => {
  const { children, regions = [] } = props
  const router = useRouter()
  const { regionName } = router.query
  const onChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    router.replace(`/regions/${value}`, undefined, { shallow: true })
  }

  const region = useMemo(() => {
    return regions.find(({ name }) => name === regionName)
  }, [regions, regionName])

  return (
    <SearchContext.Provider
      value={{
        onChangeFilter,
        regions,
        filter: {
          region,
        },
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
