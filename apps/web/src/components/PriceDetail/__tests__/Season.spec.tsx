import "@emotion/jest"
import { render } from "@testing-library/react"
import { ThemeProvider } from "ui/styles"
import Season from "../Season"
import { PriceDetailSeasonProps } from "../types"

const Wrapper = (props: PriceDetailSeasonProps) => {
  return (
    <ThemeProvider>
      <Season {...props} />
    </ThemeProvider>
  )
}

describe("Components/PriceDetail/Season", () => {
  describe("When not provider props 'season'", () => {
    it("Must return only fragments", () => {
      const { container } = render(<Wrapper />)
      expect(container.innerHTML).toEqual("")
    })
  })
  describe("When pass props season", () => {
    describe("When season is equal 'low'", () => {
      it("Must render component with text 'Budget Season'", () => {
        const season = "low"
        const { container } = render(<Wrapper season={season} />)
        expect(container.textContent?.trim()).toEqual("Budget Season")
      })
    })
    describe("When season is equal 'hight'", () => {
      it("Must render component with text 'Prime Season'", () => {
        const season = "high"
        const { container } = render(<Wrapper season={season} />)
        expect(container.textContent?.trim()).toEqual("Prime Season")
      })
      it("Must Arrow contains style rotate", () => {
        const season = "high"
        const { container } = render(<Wrapper season={season} />)
        const svg = container.querySelector("svg") as SVGSVGElement
        expect(svg).toHaveStyleRule("transform", "rotate(180deg)")
      })
    })
  })
})
