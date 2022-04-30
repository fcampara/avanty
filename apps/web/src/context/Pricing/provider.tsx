import { PricingContextProps, PricingHome, PricingProvider } from "./types"
import PricingContext from "./context"
import { useContext, useRef } from "react"
import { useHomesPricing } from "../../services/graphql/homesPricing/useHomes"
import { useSearch } from "../Search/provider"

const PricingProvider = (props: PricingProvider) => {
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

  return (
    <PricingContext.Provider value={{ pricing: homePricing.current, loading }}>
      {children}
    </PricingContext.Provider>
  )
}

export const usePricingHome = (): PricingContextProps => {
  const context = useContext(PricingContext)
  return context
}

export default PricingProvider
