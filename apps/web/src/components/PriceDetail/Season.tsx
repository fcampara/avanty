import { PriceDetailSeasonProps } from "./types"
import { Arrow } from "./styles"

const PriceDetailSeason = (props: PriceDetailSeasonProps) => {
  const { season } = props
  if (!season) return <></>
  const text = season === "high" ? "Prime Season" : "Budget Season"

  return (
    <>
      <Arrow season={season} /> {text}
    </>
  )
}

export default PriceDetailSeason
