import { usePricingHome } from "../../../hooks/usePricingHome"
import PriceDetail from "../../PriceDetail"
import CardPriceLoading from "../CardHomePricingLoading"
import * as Styled from "../styles"
import { CardHomePricingProps } from "./types"

const CardHomePricing = (props: CardHomePricingProps) => {
  const { id, seasonPricing } = props
  const { loading, pricing } = usePricingHome()
  const seasonLowerPrice = Object.values(seasonPricing?.lowSeason || {})
  const seasonHighPrice = Object.values(seasonPricing?.highSeason || {})
  const homePricing = pricing.get(id)
  if (loading && !homePricing) return <CardPriceLoading />
  if (!homePricing)
    return (
      <Styled.PriceWrapper>
        <PriceDetail season={"low"} price={seasonLowerPrice} />
        <PriceDetail season={"high"} price={seasonHighPrice} />
      </Styled.PriceWrapper>
    )

  return (
    <PriceDetail
      nights={homePricing.numberOfNights}
      price={homePricing.total}
    />
  )
}

export default CardHomePricing
