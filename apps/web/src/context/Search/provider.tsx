import { useRouter } from "next/router"
import React, { useMemo, useRef } from "react"
import { DEFAULT_ORDER } from "../../constants/filters"
import { HomeVariablePeriod } from "../../services/graphql/homes/types"
import SearchContext from "./context"
import {
  SearchFilterName,
  SearchFilterOrder,
  SearchProviderProps,
} from "./types"

const DEFAULT_FILTER: { [k in string]: string } = {
  region: "",
  order: DEFAULT_ORDER,
  guests: "2",
  checkIn: "",
  checkOut: "",
}

const SearchProvider = (props: SearchProviderProps) => {
  const { children, regions = [] } = props
  const filters = useRef(new Set<string>())
  const router = useRouter()
  const { regionName, order, guests, checkIn, checkOut } = router.query

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

    if (value) {
      router.query[filterName] = value
    } else {
      delete router.query[filterName]
    }

    router.replace(router, undefined, { shallow: true })
  }

  const clearFilters = () => {
    for (const filterName of filters.current) {
      const element = document.querySelector<HTMLInputElement>(
        `[name="${filterName}"]`,
      )
      if (!element) continue

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

  const period = useMemo(() => {
    if (!checkIn && !checkOut) return
    const period: HomeVariablePeriod = {}
    if (checkIn) period.checkIn = checkIn as string
    if (checkOut) period.checkOut = checkOut as string
    return period
  }, [checkIn, checkOut])

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
          period,
        },
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
