import { memo } from "react"
import Image from "next/image"
import * as Styled from "./styles"
import { Rooms, Bath, User, Pool } from "icons"
import { Separator } from "ui"
import usePicture from "../../hooks/usePicture"
import { CardHomeProps } from "./types"
import CardHomePricing from "./CardHomePricing"

const CardHome = (props: CardHomeProps) => {
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
            {Boolean(roomsCount) && (
              <li>
                <Rooms />
                {roomsCount} Bedrooms
              </li>
            )}
            {Boolean(bathroomsCount) && (
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
            {Boolean(maxOccupancy) && (
              <li>
                <User />
                {maxOccupancy} Guests
              </li>
            )}
          </Styled.Amenities>
        </div>
        <CardHomePricing id={id} seasonPricing={seasonPricing} />
      </Styled.CardDetail>
    </Styled.Card>
  )
}

export default memo(CardHome)
