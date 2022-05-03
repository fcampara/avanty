import { Skeleton } from "ui"
import * as Styled from "../styles"
import { CardHomeLoadingProps } from "./types"

const CardHomeLoading = (props: CardHomeLoadingProps) => {
  const { repeat = 0 } = props
  return (
    <>
      {new Array(repeat).fill(undefined).map((_, index) => (
        <Styled.Card key={index}>
          <Skeleton width={360} height={208} />
          <Styled.CardDetail>
            <div className="av-card-price__detail--loading">
              <Skeleton width={132} height={17} />
              <Skeleton width={218} height={28} />
              <Skeleton width={240} height={15} />
            </div>
            <Styled.PriceWrapper className="av-card-price__wrapper--loading">
              <Skeleton width={74} height={17} />
              <Skeleton width={98} height={22} />
              <Skeleton width={45} height={17} />
            </Styled.PriceWrapper>
          </Styled.CardDetail>
        </Styled.Card>
      ))}
    </>
  )
}

export default CardHomeLoading
