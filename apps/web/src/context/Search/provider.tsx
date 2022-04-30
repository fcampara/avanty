import { useRouter } from "next/router"
import React, { useContext, useMemo } from "react"
import { DEFAULT_ORDER } from "../../constants/filters"
import SearchContext from "./context"
import {
  SearchContextProps,
  SearchFilterName,
  SearchFilterOrder,
  SearchProvider,
} from "./types"

const SearchProvider = (props: SearchProvider) => {
  const { children, regions = [] } = props
  const router = useRouter()
  const { regionName, order, guests } = router.query

  const setFilterRegion = (value: string) => {
    if (router.pathname === "/") {
      return router.replace(
        {
          pathname: `/regions/${value}`,
          query: router.query,
        },
        undefined,
        { shallow: true },
      )
    }

    router.query.regionName = value
    return router.replace(router, undefined, { shallow: true })
  }

  const onChangeFilter = (value: string, filterName: SearchFilterName) => {
    if (filterName === "regions") {
      return setFilterRegion(value)
    }

    router.query[filterName] = value
    router.replace(router, undefined, { shallow: true })
  }

  const region = useMemo(
    () => regions.find(({ name }) => name === regionName),
    [regions, regionName],
  )

  return (
    <SearchContext.Provider
      value={{
        onChangeFilter,
        regions,
        filter: {
          region,
          order: (order as SearchFilterOrder) || DEFAULT_ORDER,
          guests: (guests as string) || "2",
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
