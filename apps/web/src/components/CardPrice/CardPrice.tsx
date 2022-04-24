import Image from "next/image"
import * as Styled from "./styles"
import { Rooms, Bath, User, Pool } from "icons"
import PriceDetail from "../PriceDetail"
import { Separator } from "ui"
import { Home } from "../../services/graphql/queries/homes/types"
import { memo } from "react"

const CardPrice = (props: Home) => {
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
  } = props
  return (
    <Styled.Card>
      <Image width={360} height={208} src={photos[0].url} />
      <Styled.CardDetail>
        <div className="av-card__container">
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
            <li>
              <Bath />
              {bathroomsCount} Bathrooms
            </li>
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
        <div>
          <PriceDetail />
        </div>
      </Styled.CardDetail>
    </Styled.Card>
  )
}

export default memo(CardPrice)
