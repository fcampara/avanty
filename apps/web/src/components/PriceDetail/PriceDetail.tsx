import * as Styled from "./styles"
import { PriceDetailSeasonProps } from "./types"
import PriceDetailNight from "./Night"
import PriceDetailSeason from "./Season"
import PriceDetailAmount from "./Amount"
import PriceDetailPerNight from "./PerNight"

const PriceDetail = (props: PriceDetailSeasonProps) => {
  const { nights, season, price, perNight } = props
  const showPerNight = !nights && !season && !price && !perNight

  return (
    <Styled.PriceDetail>
      <Styled.Information>
        <PriceDetailNight nights={nights} />
        <PriceDetailSeason season={season} />
      </Styled.Information>
      <PriceDetailAmount price={price} />
      {!showPerNight && <PriceDetailPerNight perNight={perNight} />}
    </Styled.PriceDetail>
  )
}

export default PriceDetail