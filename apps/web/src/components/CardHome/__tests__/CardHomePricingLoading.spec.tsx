import { render } from "@testing-library/react"
import { ThemeProvider } from "ui/styles"
import CardHomePricingLoading from "../CardHomePricingLoading"

const Wrapper = () => {
  return (
    <ThemeProvider>
      <CardHomePricingLoading />
    </ThemeProvider>
  )
}

describe("Components/CardHome/CardHomePricingLoading", () => {
  it("Must render with childrens", () => {
    const { container } = render(<Wrapper />)
    expect(container.childElementCount).toBeGreaterThan(0)
  })
})
