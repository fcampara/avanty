import useMoney from "../../../hooks/useMoney"
import { Information } from "../styles"
import { PriceDetailPerNightProps } from "./types"

const PriceDetailPerNight = (props: PriceDetailPerNightProps) => {
  const { perNight } = props
  const formatted = useMoney(perNight)
  return <Information>{formatted} per night</Information>
}

export default PriceDetailPerNight
