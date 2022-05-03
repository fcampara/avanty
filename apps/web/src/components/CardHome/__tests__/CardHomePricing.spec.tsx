/* eslint-disable react/display-name */
import { render } from "@testing-library/react"
import { datatype } from "faker"
import { ThemeProvider } from "ui/styles"
import { mockUsePricingHome } from "../../../../__mocks__/mockUsePricingHome"
import { PricingContextProps } from "../../../context/Pricing/types"
import { HomeSeasonPrice } from "../../../services/graphql/homes"
import { PriceDetailProps } from "../../PriceDetail"
import CardHomePricing, { CardHomePricingProps } from "../CardHomePricing"

const separator = " - "
const priceDetailTestId = "priceDetailTestId"
const cardHomePricingLoadingTestId = "CardHomePricingLoadingTestId"
jest.mock("../CardHomePricingLoading", () => () => (
  <span data-testid={cardHomePricingLoadingTestId}>Loading</span>
))

jest.mock(
  "../../PriceDetail",
  () =>
    ({ season, nights, price }: PriceDetailProps) =>
      (
        <span
          data-testid={priceDetailTestId}
          data-season={season}
          data-nights={nights}
          data-price={price}
        >
          {Array.isArray(price) ? price.join(separator) : price}
        </span>
      ),
)

const seasonPricing: HomeSeasonPrice = {
  highSeason: {
    maxPrice: datatype.number(),
    minPrice: datatype.number(),
  },
  lowSeason: {
    maxPrice: datatype.number(),
    minPrice: datatype.number(),
  },
}

const Wrapper = (props: CardHomePricingProps) => {
  return (
    <ThemeProvider>
      <CardHomePricing {...props} />
    </ThemeProvider>
  )
}

describe("Components/CardHome/CardHomePricing", () => {
  describe("When home pricing is loading", () => {
    it("Must render CardHomePricingLoading", () => {
      const id = datatype.uuid()
      mockUsePricingHome({
        loading: true,
      })
      const { getByTestId } = render(
        <Wrapper id={id} seasonPricing={seasonPricing} />,
      )
      const elementLoading = getByTestId(cardHomePricingLoadingTestId)
      expect(elementLoading).toBeInTheDocument()
    })
  })
  describe("When not have home price in usePricingHome", () => {
    it("Must render PriceDetail with season low and high", () => {
      const id = datatype.uuid()
      mockUsePricingHome({
        loading: false,
      })
      const seasonLowerPrice = Object.values(seasonPricing?.lowSeason || {})
      const seasonHighPrice = Object.values(seasonPricing?.highSeason || {})

      const { getAllByTestId } = render(
        <Wrapper id={id} seasonPricing={seasonPricing} />,
      )

      const seasonElements = getAllByTestId(priceDetailTestId)

      seasonElements.forEach(seasonElement => {
        const season = seasonElement.dataset.season
        if (season === "low") {
          expect(seasonElement.innerHTML).toEqual(
            seasonLowerPrice.join(separator),
          )
        }

        if (season === "high") {
          expect(seasonElement.innerHTML).toEqual(
            seasonHighPrice.join(separator),
          )
        }
      })
    })
  })
  describe("When usePricingHome and have home price", () => {
    it("Must render PriceDetail with nights and price", () => {
      const id = datatype.uuid()
      const pricing: PricingContextProps["pricing"] = new Map()
      const numberOfNights = datatype.number()
      const total = datatype.number()
      pricing.set(id, {
        numberOfNights,
        total,
      })
      mockUsePricingHome({
        loading: false,
        pricing,
      })

      const { getByTestId } = render(<Wrapper id={id} />)

      const element = getByTestId(priceDetailTestId)
      const { nights, price } = element.dataset

      expect(nights).toEqual(String(numberOfNights))
      expect(price).toEqual(String(total))
    })
  })
})
