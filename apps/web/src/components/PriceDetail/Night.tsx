import { Separator } from "ui"
import { PriceDetailSeasonProps } from "./types"

const PriceDetailNight = (props: Pick<PriceDetailSeasonProps, "nights">) => {
  const { nights } = props

  if (!nights) return <></>
  return (
    <>
      Total <Separator /> {nights} nights
    </>
  )
}

export default PriceDetailNight
