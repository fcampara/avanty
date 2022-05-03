/* eslint-disable react/display-name */
import { render } from "@testing-library/react"
import { address, datatype, image, lorem } from "faker"
import { ThemeProvider } from "ui/styles"
import CardHome from "../CardHome"
import { CardHomeProps } from "../types"
const cardHomePricingTestId = "cardHomePricingTestId"
jest.mock("../CardHomePricing", () => () => (
  <div data-testid={cardHomePricingTestId}>Card Home Pricing</div>
))

const MOCK_HOME: CardHomeProps = {
  bathroomsCount: datatype.number() || 1,
  cityName: address.cityName(),
  hasPool: datatype.boolean(),
  id: datatype.uuid(),
  maxOccupancy: datatype.number() || 1,
  photos: [
    {
      url: image.imageUrl(),
    },
  ],
  regionName: address.county(),
  roomsCount: datatype.number() || 1,
  stateCode: address.stateAbbr(),
  title: lorem.word(),
  seasonPricing: {
    highSeason: {
      maxPrice: datatype.number(),
      minPrice: datatype.number(),
    },
    lowSeason: {
      maxPrice: datatype.number(),
      minPrice: datatype.number(),
    },
  },
}

const Wrapper = (props: CardHomeProps) => {
  return (
    <ThemeProvider>
      <CardHome {...props} />
    </ThemeProvider>
  )
}

describe("Components/CardHome/CardHome", () => {
  describe("When pass props regionName", () => {
    it("Must render", () => {
      const { getByText } = render(<Wrapper {...MOCK_HOME} />)
      const element = getByText(MOCK_HOME.regionName)
      expect(element).toBeInTheDocument()
    })
  })
  describe("When pass props cityName and stateCode", () => {
    it("Must render formatted", () => {
      const { getByText } = render(<Wrapper {...MOCK_HOME} />)
      const formattedText = `${MOCK_HOME.cityName}, ${MOCK_HOME.stateCode}`
      const element = getByText(formattedText)
      expect(element).toBeInTheDocument()
    })
  })
  describe("When pass props title", () => {
    it("Must render", () => {
      const { getByText } = render(<Wrapper {...MOCK_HOME} />)
      const element = getByText(MOCK_HOME.title)
      expect(element).toBeInTheDocument()
    })
  })
  describe("When pass props roomsCount", () => {
    it("Must render svg Rooms", () => {
      const { getByTestId } = render(<Wrapper {...MOCK_HOME} />)
      const element = getByTestId("svg-room")
      expect(element).toBeInTheDocument()
    })
    it("Must render room text formatted", () => {
      const { getByText } = render(<Wrapper {...MOCK_HOME} />)
      const element = getByText(`${MOCK_HOME.roomsCount} Bedrooms`)
      expect(element).toBeInTheDocument()
    })
  })
  describe("When pass not props roomsCount", () => {
    it("Must not render svg rooms", () => {
      const { container } = render(<Wrapper {...MOCK_HOME} roomsCount={0} />)
      const svgRoomElement = container.querySelector("[data-testid='svg-room']")
      expect(svgRoomElement).toBeNull()
    })
  })
  describe("When pass props bathRoomsCount", () => {
    it("Must render svg Rooms", () => {
      const { getByTestId } = render(<Wrapper {...MOCK_HOME} />)
      const element = getByTestId("svg-bath")
      expect(element).toBeInTheDocument()
    })
    it("Must render bathrooms text formatted", () => {
      const { getByText } = render(<Wrapper {...MOCK_HOME} />)
      const element = getByText(`${MOCK_HOME.bathroomsCount} Bathrooms`)
      expect(element).toBeInTheDocument()
    })
  })
  describe("When pass not props bathRoomsCount", () => {
    it("Must not render svg Bath", () => {
      const { container } = render(
        <Wrapper {...MOCK_HOME} bathroomsCount={0} />,
      )
      const svgRoomElement = container.querySelector("[data-testid='svg-bath']")
      expect(svgRoomElement).toBeNull()
    })
  })
  describe("When pass props hasPool", () => {
    it("Must render svg Bath", () => {
      const { getByTestId } = render(<Wrapper {...MOCK_HOME} hasPool />)
      const element = getByTestId("svg-pool")
      expect(element).toBeInTheDocument()
    })
    it("Must render pool text", () => {
      const { getByText } = render(<Wrapper {...MOCK_HOME} hasPool />)
      const element = getByText("Pool")
      expect(element).toBeInTheDocument()
    })
  })
  describe("When pass not props hasPool", () => {
    it("Must not render svg Pool", () => {
      const { container } = render(<Wrapper {...MOCK_HOME} hasPool={false} />)
      const svgRoomElement = container.querySelector("[data-testid='svg-pool']")
      expect(svgRoomElement).toBeNull()
    })
  })
  //
  describe("When pass props maxOccupancy", () => {
    it("Must render svg User", () => {
      const { getByTestId } = render(<Wrapper {...MOCK_HOME} />)
      const element = getByTestId("svg-user")
      expect(element).toBeInTheDocument()
    })
    it("Must render text max ocuppation formatted", () => {
      const { getByText } = render(<Wrapper {...MOCK_HOME} />)
      const element = getByText(`${MOCK_HOME.maxOccupancy} Guests`)
      expect(element).toBeInTheDocument()
    })
  })
  describe("When pass not props maxOccupancy", () => {
    it("Must not render svg User", () => {
      const { container } = render(<Wrapper {...MOCK_HOME} maxOccupancy={0} />)
      const svgRoomElement = container.querySelector("[data-testid='svg-user']")
      expect(svgRoomElement).toBeNull()
    })
  })
  describe("When pass seasonPricing", () => {
    it("Must render CardHomePricing", () => {
      const { getByTestId } = render(<Wrapper {...MOCK_HOME} />)
      const element = getByTestId(cardHomePricingTestId)
      expect(element).toBeInTheDocument()
    })
  })
})
