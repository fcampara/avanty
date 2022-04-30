import { memo } from "react"
import Image from "next/image"
import * as Styled from "./styles"
import { Rooms, Bath, User, Pool } from "icons"
import PriceDetail from "../PriceDetail"
import { Separator } from "ui"
import usePicture from "../../hooks/usePicture"
import { CardPriceProps } from "./types"
import { usePricingHome } from "../../context/Pricing/provider"
import CardPriceLoading from "./PriceLoading"

const Pricing = (props: Pick<CardPriceProps, "id" | "seasonPricing">) => {
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

const CardPrice = (props: CardPriceProps) => {
  const {
    id,
    seasonPricing,
    bathroomsCount,
    maxOccupancy,
    roomsCount,
    photos,
    title,
    cityName,
    stateCode,
    regionName,
    hasPool,
  } = props

  const photoUrl = usePicture(photos[0].url, {
    webp: true,
    width: 360,
    height: 208,
    quality: 50,
  })

  return (
    <Styled.Card>
      <Image width={360} height={208} src={photoUrl} />
      <Styled.CardDetail>
        <div>
          <Styled.RegionWrapper>
            <Styled.Region>{regionName}</Styled.Region>
            <Separator color="accent" />
            <Styled.Region>
              {cityName}, {stateCode}
            </Styled.Region>
          </Styled.RegionWrapper>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Amenities>
            <li>
              <Rooms />
              {roomsCount} Bedrooms
            </li>
            {bathroomsCount && (
              <li>
                <Bath />
                {bathroomsCount} Bathrooms
              </li>
            )}
            {hasPool && (
              <li>
                <Pool />
                Pool
              </li>
            )}
            <li>
              <User />
              {maxOccupancy} Guests
            </li>
          </Styled.Amenities>
        </div>
        <Pricing id={id} seasonPricing={seasonPricing} />
      </Styled.CardDetail>
    </Styled.Card>
  )
}

export default memo(CardPrice)
