import { Separator } from "ui"
import { PriceDetailNightProps } from "./types"

const PriceDetailNight = (props: PriceDetailNightProps) => {
  const { nights } = props

  if (!nights) return <></>
  return (
    <>
      Total <Separator /> {nights} nights
    </>
  )
}

export default PriceDetailNight
