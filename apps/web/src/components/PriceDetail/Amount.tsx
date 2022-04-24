import useMoney from "../../hooks/useMoney"
import { Price } from "./styles"
import { PriceDetailSeasonProps } from "./types"

const PriceDetailAmount = (props: Pick<PriceDetailSeasonProps, "price">) => {
  const { price } = props
  if (!price) return <></>

  let formatedPrice = useMoney(price)
  if (Array.isArray(formatedPrice)) {
    formatedPrice = formatedPrice.join(" - ")
  }

  return <Price>{formatedPrice}</Price>
}

export default PriceDetailAmount
