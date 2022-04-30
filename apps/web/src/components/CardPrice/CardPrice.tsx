import { memo } from "react"
import Image from "next/image"
import * as Styled from "./styles"
import { Rooms, Bath, User, Pool } from "icons"
import PriceDetail from "../PriceDetail"
import { Separator } from "ui"
import usePicture from "../../hooks/usePicture"
import { CardPriceProps } from "./types"

const CardPrice = (props: CardPriceProps) => {
  const {
    bathroomsCount,
    maxOccupancy,
    roomsCount,
    photos,
    title,
    cityName,
    stateCode,
    regionName,
    hasPool,
    seasonPricing,
  } = props

  const seasonLowerPrice = Object.values(seasonPricing?.lowSeason || {})
  const seasonHighPrice = Object.values(seasonPricing?.highSeason || {})
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
        <Styled.PriceWrapper>
          <PriceDetail season={"low"} price={seasonLowerPrice} />
          <PriceDetail season={"high"} price={seasonHighPrice} />
        </Styled.PriceWrapper>
      </Styled.CardDetail>
    </Styled.Card>
  )
}

export default memo(CardPrice)
