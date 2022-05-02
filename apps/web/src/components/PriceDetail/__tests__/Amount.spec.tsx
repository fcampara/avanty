import { render } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks/native"
import { datatype } from "faker"
import { ThemeProvider } from "ui/styles"
import { useMoney } from "../../../hooks"
import PriceDetailAmount from "../Amount"
import { PriceDetailAmountProps } from "../types"

const Wrapper = (props: PriceDetailAmountProps) => {
  return (
    <ThemeProvider>
      <PriceDetailAmount {...props} />
    </ThemeProvider>
  )
}

describe("Components/PriceDetail/Amount", () => {
  describe("When not provider props 'price'", () => {
    it("Must return only fragments", () => {
      const { container } = render(<Wrapper />)
      expect(container.innerHTML).toEqual("")
    })
  })
  describe("When pass props 'price' number", () => {
    it("Must show in screen formatted price", () => {
      const price = datatype.number()
      const { result } = renderHook(() => useMoney(price))
      const formattedPrice = String(result.current)
      const { getByText } = render(<Wrapper price={price} />)
      const element = getByText(formattedPrice)
      expect(element.innerHTML).toEqual(formattedPrice)
    })
  })
    describe("When pass props 'price' array number", () => {
    it("Must show in screen formatted price", () => {
      const prices = [datatype.number(), datatype.number()]
      const { result } = renderHook(() => useMoney(prices))
      const formattedPrice = `${result.current[0]} - ${result.current[1]}`
      const { getByText } = render(<Wrapper price={prices} />)
      const element = getByText(formattedPrice)
      expect(element.innerHTML).toEqual(formattedPrice)
    })
  })
})
