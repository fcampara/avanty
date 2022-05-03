import { render } from "@testing-library/react"
import { datatype } from "faker"
import { ThemeProvider } from "ui/styles"
import CardHomeLoading, { CardHomeLoadingProps } from "../CardHomeLoading"

const Wrapper = (props: CardHomeLoadingProps) => {
  return (
    <ThemeProvider>
      <CardHomeLoading {...props} />
    </ThemeProvider>
  )
}

describe("Components/CardHome/CardHomeLoading", () => {
  describe("When not provider props repeat", () => {
    it("Must render only fragment", () => {
      const { container } = render(<Wrapper />)
      expect(container.innerText).toBeUndefined()
    })
  })
  describe("When provider props repeat", () => {
    it("Must render all children element", () => {
      const repeat = datatype.number(100)
      const { container } = render(<Wrapper repeat={repeat} />)
      expect(container.childElementCount).toEqual(repeat)
    })
  })
})
