import { Skeleton } from "ui"
import * as Styled from "./styles"

const CardPriceLoading = () => {
  return (
    <Styled.Card>
      <Styled.PriceWrapper className="av-card-price__wrapper--loading">
        <Skeleton width={74} height={17} />
        <Skeleton width={98} height={22} />
        <Skeleton width={45} height={17} />
      </Styled.PriceWrapper>
    </Styled.Card>
  )
}

export default CardPriceLoading
