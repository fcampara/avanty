import { PricingContextProps, PricingHome, PricingProvider } from "./types"
import PricingContext from "./context"
import { useContext } from "react"
import { useHomesPricing } from "../../services/graphql/homesPricing/useHomes"
import { useSearch } from "../Search/provider"

const PricingProvider = (props: PricingProvider) => {
  const { children, homes } = props
  const { filter } = useSearch()
  const homeIds =
    homes?.map(({ id }) => {
      return id
    }) || []

  const skip =
    !homeIds.length || !filter.period?.checkIn || !filter.period?.checkOut

  const { data, loading } = useHomesPricing({
    variables: {
      ids: homeIds,
      period: filter.period,
    },
    skip,
  })

  const homePricing =
    data?.homesPricing.reduce((currentPricing, homePricing) => {
      const { homeId, ...restPricing } = homePricing
      currentPricing[homeId] = restPricing
      return currentPricing
    }, {} as PricingHome) || {}

  return (
    <PricingContext.Provider value={{ pricing: homePricing, loading }}>
      {children}
    </PricingContext.Provider>
  )
}

export const usePricingHome = (): PricingContextProps => {
  const context = useContext(PricingContext)
  return context
}

export default PricingProvider
