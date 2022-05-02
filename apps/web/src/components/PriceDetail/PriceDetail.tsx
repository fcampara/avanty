import * as Styled from "./styles"
import { PriceDetailProps } from "./types"
import PriceDetailNight from "./PriceDetailNight"
import PriceDetailSeason from "./PriceDetailSeason"
import PriceDetailAmount from "./PriceDetailAmount"
import PriceDetailPerNight from "./PriceDetailPerNight"

const PriceDetail = (props: PriceDetailProps) => {
  const { nights, season, price, perNight } = props
  const showPerNight = !(!nights && !season && !price && !perNight)

  return (
    <Styled.PriceDetail>
      <Styled.Information>
        <PriceDetailNight nights={nights} />
        <PriceDetailSeason season={season} />
      </Styled.Information>
      <PriceDetailAmount price={price} />
      {showPerNight && <PriceDetailPerNight perNight={perNight} />}
    </Styled.PriceDetail>
  )
}

export default PriceDetail
