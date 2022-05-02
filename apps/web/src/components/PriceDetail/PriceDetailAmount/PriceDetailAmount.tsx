import useMoney from "../../../hooks/useMoney"
import { Price } from "./styles"
import { PriceDetailAmountProps } from "./types"

const PriceDetailAmount = (props: PriceDetailAmountProps) => {
  const { price } = props
  if (!price) return <></>

  let formatedPrice = useMoney(price)
  if (Array.isArray(formatedPrice)) {
    formatedPrice = formatedPrice.join(" - ")
  }

  return <Price>{formatedPrice}</Price>
}

export default PriceDetailAmount
