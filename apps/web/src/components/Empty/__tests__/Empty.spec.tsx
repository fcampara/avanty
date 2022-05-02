import { ThemeProvider } from "ui/styles"
import Empty from "../Empty"
import { fireEvent, render } from "@testing-library/react"
import { mockNextUseRouter } from "../../../../__mocks__/mockNextUseRouter"
import { mockUseSearch } from "../../../../__mocks__/mockUseSearch"

const Wrapper = () => {
  return (
    <ThemeProvider>
      <Empty />
    </ThemeProvider>
  )
}

describe("Components/Empty", () => {
  describe("When in router has parameter regionName", () => {
    it("Expect render Button contains regionName", () => {
      const regionName = "Example"
      mockNextUseRouter({
        query: {
          regionName,
        },
      })
      const { baseElement } = render(<Wrapper />)
      const button = baseElement.querySelector("button") as HTMLButtonElement
      expect(button.textContent).toEqual(`See all ${regionName} homes`)
    })
    it("Expect render text information includes regionName", () => {
      const regionName = "Example"
      mockNextUseRouter({
        query: {
          regionName,
        },
      })
      const { baseElement } = render(<Wrapper />)
      const element = baseElement.querySelector("p") as HTMLParagraphElement
      /** @ts-expect-error Only for testing */
      expect(element.textContent.includes(regionName)).toBeTruthy()
    })
  })
  describe("When router no has parameter regionName", () => {
    it("Expect render Button contains regionName", () => {
      mockNextUseRouter()
      const { baseElement } = render(<Wrapper />)
      const button = baseElement.querySelector("button") as HTMLButtonElement
      expect(button.textContent).toEqual("See all  homes")
    })
    it("Expect render text information includes regionName", () => {
      mockNextUseRouter()
      const { baseElement } = render(<Wrapper />)
      const element = baseElement.querySelector("p") as HTMLParagraphElement
      expect(element.textContent).toEqual(
        "Oops! We havent found anything mathing your search.Try something else or reset the filters to see all  homes.",
      )
    })
  })
  describe("When click in button see all", () => {
    it("Must call method clearFilters", () => {
      const clearFilters = jest.fn()
      mockNextUseRouter()
      mockUseSearch({ clearFilters })
      const { baseElement } = render(<Wrapper />)
      const button = baseElement.querySelector("button") as HTMLButtonElement
      fireEvent.click(button)
      expect(clearFilters).toBeCalled()
    })
  })
})
