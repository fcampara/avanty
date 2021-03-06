/* eslint-disable react/display-name */
import { render } from "@testing-library/react"
import { datatype } from "faker"
import { ThemeProvider } from "ui/styles"
import PriceDetail from "../PriceDetail"
import { PriceDetailAmountProps } from "../PriceDetailAmount"
import { PriceDetailNightProps } from "../PriceDetailNight"
import { PriceDetailPerNightProps } from "../PriceDetailPerNight"
import { PriceDetailSeasonProps } from "../PriceDetailSeason"
import { PriceDetailProps } from "../types"

const nightTestId = "PriceDetailNightTestId"
const seasonTestId = "PriceDetailSeasonTestId"
const amountTestId = "PriceDetailAmountTestId"
const perNightTestId = "PriceDetailPerNightTestId"
jest.mock("../PriceDetailNight", () => (props: PriceDetailNightProps) => {
  const { default: OriginalModule } = jest.requireActual("../PriceDetailNight")
  return (
    <div data-testid={nightTestId}>
      <OriginalModule {...props} />
    </div>
  )
})
jest.mock("../PriceDetailSeason", () => (props: PriceDetailSeasonProps) => {
  const { default: OriginalModule } = jest.requireActual("../PriceDetailSeason")
  return (
    <div data-testid={seasonTestId}>
      <OriginalModule {...props} />
    </div>
  )
})
jest.mock("../PriceDetailAmount", () => (props: PriceDetailAmountProps) => {
  const { default: OriginalModule } = jest.requireActual("../PriceDetailAmount")
  return (
    <div data-testid={amountTestId}>
      <OriginalModule {...props} />
    </div>
  )
})
jest.mock("../PriceDetailPerNight", () => (props: PriceDetailPerNightProps) => {
  const { default: OriginalModule } = jest.requireActual(
    "../PriceDetailPerNight",
  )
  return (
    <div data-testid={perNightTestId}>
      <OriginalModule {...props} />
    </div>
  )
})

const Wrapper = (props: PriceDetailProps) => {
  return (
    <ThemeProvider>
      <PriceDetail {...props} />
    </ThemeProvider>
  )
}

describe("Components/PriceDetail/PriceDetail", () => {
  describe("When pass props nights", () => {
    it("Must render component 'Night'", () => {
      const nights = datatype.number()
      const { getByTestId } = render(<Wrapper nights={nights} />)
      const element = getByTestId(nightTestId)
      expect(element).toBeInTheDocument()
    })
  })
  describe("When pass props price", () => {
    it("Must render component 'Amount'", () => {
      const price = datatype.number()
      const { getByTestId } = render(<Wrapper price={price} />)
      const element = getByTestId(amountTestId)
      expect(element).toBeInTheDocument()
    })
  })
  describe("When pass props season", () => {
    it("Must render component 'Season'", () => {
      const season = "low"
      const { getByTestId } = render(<Wrapper season={season} />)
      const element = getByTestId(seasonTestId)
      expect(element).toBeInTheDocument()
    })
  })
  describe("When pass props nights, season, price and perNight", () => {
    it("Must render component 'PerNight'", () => {
      const nights = datatype.number()
      const season = "low"
      const price = datatype.number()
      const perNight = datatype.number()
      const { getByTestId } = render(
        <Wrapper
          perNight={perNight}
          price={price}
          season={season}
          nights={nights}
        />,
      )
      const element = getByTestId(perNightTestId)
      expect(element).toBeInTheDocument()
    })
  })
})
