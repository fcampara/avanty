import Image from "next/image"
import * as Styled from "./styles"
import { Rooms, Bath, User, Pool } from "icons"
import PriceDetail from "../PriceDetail"
import { Separator } from "ui"

const CardPrice = () => {
  return (
    <Styled.Card>
      <Image
        width={360}
        height={208}
        src="https://imglite.avantstay.com/homes/db5dd92d-51c1-11ea-aff7-8d6278492f66/images/original_156505293.jpeg"
      />
      <Styled.CardDetail>
        <div className="av-card__container">
          <Styled.RegionWrapper>
            <Styled.Region>Coachella Valley</Styled.Region>{" "}
            <Separator color="accent" />
            <Styled.Region>Palm Springs, CA</Styled.Region>
          </Styled.RegionWrapper>
          <Styled.Title>Paradise Valley</Styled.Title>
          <Styled.Amenities>
            <li>
              <Rooms />
              12 Bedrooms
            </li>
            <li>
              <Bath />
              12 Bathrooms
            </li>
            <li>
              <Pool />
              Pool
            </li>
            <li>
              <User />
              12 Guests
            </li>
          </Styled.Amenities>
        </div>
        <div>
          <PriceDetail nights={8} perNight={500} price={5000} />
        </div>
      </Styled.CardDetail>
    </Styled.Card>
  )
}

export default CardPrice
