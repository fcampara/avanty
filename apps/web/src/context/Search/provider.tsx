import { useRouter } from "next/router"
import React, { useContext, useMemo, useRef } from "react"
import { DEFAULT_ORDER } from "../../constants/filters"
import SearchContext from "./context"
import {
  SearchContextProps,
  SearchFilterName,
  SearchFilterOrder,
  SearchProvider,
} from "./types"

const DEFAULT_FILTER: { [k in string]: string } = {
  region: "",
  order: DEFAULT_ORDER,
  guests: "2"
}

const SearchProvider = (props: SearchProvider) => {
  const { children, regions = [] } = props
  const filters = useRef(new Set<string>())
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

  const clearFilters = () => {
    for (const filterName of filters.current) {
      const element = document.querySelector<HTMLInputElement>(`[name="${filterName}"]`)
      if (!element) continue

      console.log("filterName", filterName)
      console.log("DEFAULT_FILTER?.[filterName]", DEFAULT_FILTER?.[filterName])
      element.value = DEFAULT_FILTER?.[filterName] || ""
    }
    router.replace("/")
  }

  const setFilter = (filterName: string) => {
    filters.current.add(filterName)
  }

  const region = useMemo(
    () => regions.find(({ name }) => name === regionName),
    [regions, regionName],
  )

  return (
    <SearchContext.Provider
      value={{
        setFilter,
        clearFilters,
        onChangeFilter,
        regions,
        filter: {
          region,
          order: (order as SearchFilterOrder) || DEFAULT_FILTER.order,
          guests: (guests as string) || DEFAULT_FILTER.guests,
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
