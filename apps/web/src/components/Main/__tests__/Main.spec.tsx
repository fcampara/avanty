import { render } from "@testing-library/react"
import { HTMLAttributes } from "react"
import { ThemeProvider } from "ui/styles"
import { Main } from "../styles"

const dataTestId = "main-testid"
const Wrapper = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <ThemeProvider>
      <Main data-testid={dataTestId} {...props} />
    </ThemeProvider>
  )
}

describe("Components/Main", () => {
  it("Must render normally", () => {
    const { getByTestId } = render(<Wrapper />)
    const element = getByTestId(dataTestId)
    expect(element).toBeInTheDocument()
  })
})
