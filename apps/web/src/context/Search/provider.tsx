import { useRouter } from "next/router"
import React, { ChangeEvent, useContext, useMemo } from "react"
import { DEFAULT_ORDER } from "../../constants/filters"
import SearchContext from "./context"
import { SearchContextProps, SearchFilterName, SearchFilterOrder, SearchProvider } from "./types"

const SearchProvider = (props: SearchProvider) => {
  const { children, regions = [] } = props
  const router = useRouter()
  const { regionName, order } = router.query
  const onChangeFilter = (
    event: ChangeEvent<HTMLSelectElement>,
    filterName: SearchFilterName,
  ) => {
    const { value } = event.target
    if (filterName === "regions")
      return router.replace(`/regions/${value}`, undefined, { shallow: true })

    router.query[filterName] = value
    router.replace(router, undefined, { shallow: true })
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
          order: (order as SearchFilterOrder) || DEFAULT_ORDER
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
