import { render } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks/native"
import { datatype } from "faker"
import { ThemeProvider } from "ui/styles"
import { useMoney } from "../../../hooks"
import PerNight from "../PerNight"
import { PriceDetailPerNightProps } from "../types"

const Wrapper = (props: PriceDetailPerNightProps) => {
  return (
    <ThemeProvider>
      <PerNight {...props} />
    </ThemeProvider>
  )
}

describe("Components/PriceDetail/PerNight", () => {
  describe("When not provider props 'perNight'", () => {
    it("Must return text 'per night'", () => {
      const { container } = render(<Wrapper />)
      expect(container.textContent).toEqual(" per night")
    })
  })
  describe("When pass props 'perNight'", () => {
    it("Must return correct text per night with formatted price", () => {
      const perNight = datatype.number()
      const { container } = render(<Wrapper perNight={perNight} />)
      const { result } = renderHook(() => useMoney(perNight))
      expect(container.textContent).toEqual(`${result.current} per night`)
    })
  })
})
