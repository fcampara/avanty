import useMoney from "../../hooks/useMoney"
import { Information } from "./styles"
import { PriceDetailSeasonProps } from "./types"

const PriceDetailPerNight = (
  props: Pick<PriceDetailSeasonProps, "perNight">,
) => {
  const { perNight } = props
  const formatted = useMoney(perNight)
  return <Information>{formatted} per night</Information>
}

export default PriceDetailPerNight
