import { PricingHome, PricingProviderProps } from "./types"
import PricingContext from "./context"
import { useEffect, useRef } from "react"
import { useHomesPricing } from "../../services/graphql/homesPricing/useHomes"
import { useSearch } from "../../hooks/useSearch"

const PricingProvider = (props: PricingProviderProps) => {
  const { children, homes } = props
  const { filter } = useSearch()
  const homePricing = useRef(new Map<string, PricingHome>())
  const homeIds: string[] = []
  homes?.forEach(({ id }) => {
    if (!homePricing.current.has(id)) homeIds.push(id)
  })

  const skip =
    !homeIds.length || !filter.period?.checkIn || !filter.period?.checkOut

  const { data, loading } = useHomesPricing({
    variables: {
      ids: homeIds,
      period: filter.period,
    },
    skip,
  })

  data?.homesPricing.forEach(pricing => {
    const { homeId, ...restPricing } = pricing
    if (!homePricing.current.has(homeId)) {
      homePricing.current.set(homeId, restPricing)
    }
  })

  useEffect(() => {
    homePricing.current.clear()
  }, [filter])

  return (
    <PricingContext.Provider value={{ pricing: homePricing.current, loading }}>
      {children}
    </PricingContext.Provider>
  )
}

export default PricingProvider
