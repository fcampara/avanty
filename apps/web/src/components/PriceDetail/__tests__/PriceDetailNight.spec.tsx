import { render } from "@testing-library/react"
import { datatype } from "faker"
import { ThemeProvider } from "ui/styles"
import PriceDetailNight, { PriceDetailNightProps } from "../PriceDetailNight"

const Wrapper = (props: PriceDetailNightProps) => {
  return (
    <ThemeProvider>
      <PriceDetailNight {...props} />
    </ThemeProvider>
  )
}

describe("Components/PriceDetail/Night", () => {
  describe("When not provider props 'nights'", () => {
    it("Must return only fragments", () => {
      const { container } = render(<Wrapper />)
      expect(container.innerHTML).toEqual("")
    })
  })
  describe("When pass props 'nights'", () => {
    it("Must return component with nights", () => {
      const nights = datatype.number()
      const { container } = render(<Wrapper nights={nights} />)
      expect(container.innerHTML.includes(String(nights))).toBeTruthy()
    })
  })
})
