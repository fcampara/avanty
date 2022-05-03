import { render } from "@testing-library/react"
import { datatype } from "faker"
import { ThemeProvider } from "ui/styles"
import ListCardHomeTitle, { ListCardHomeTitleProps } from "../ListCardHomeTitle"

const Wrapper = (props: ListCardHomeTitleProps) => {
  return (
    <ThemeProvider>
      <ListCardHomeTitle {...props} />
    </ThemeProvider>
  )
}

describe("Components/ListCardHome/ListCardHomeTitle", () => {
  describe("When pass pros loading", () => {
    it("Must show in title 'Please Waiting'", () => {
      const { getByText } = render(<Wrapper loading />)
      const element = getByText("Please Waiting")
      expect(element).toBeInTheDocument()
    })
    it("Must show in subtitle 'Loading'", () => {
      const { getByText } = render(<Wrapper loading />)
      const element = getByText("Loading")
      expect(element).toBeInTheDocument()
    })
  })
  describe("When pass props count and not is loading", () => {
    it("Must show in title 'Your stay in of'", () => {
      const { getByText } = render(<Wrapper loading={false} />)
      const element = getByText("Your stay in of")
      expect(element).toBeInTheDocument()
    })
    it("Must show in subtitle count homes", () => {
      const count = datatype.number()
      const { getByText } = render(<Wrapper loading={false} count={count} />)
      const element = getByText(String(count))
      expect(element.parentElement?.textContent).toEqual(`${count} homes`)
    })
  })
})
