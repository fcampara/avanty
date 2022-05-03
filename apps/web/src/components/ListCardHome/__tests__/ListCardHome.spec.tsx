/* eslint-disable react/display-name */
import { act, fireEvent, render } from "@testing-library/react"
import { ThemeProvider } from "ui/styles"
import { mockUseSearch } from "../../../../__mocks__/mockUseSearch"
import ListCardHome from "../ListCardHome"
import { MockedProvider } from "@apollo/client/testing"
import { HomeVariables, QUERY_HOMES } from "../../../services/graphql/homes"
import { mockNextUseRouter } from "../../../../__mocks__/mockNextUseRouter"
import { mockHomeResults } from "../../../../__mocks__/mockHomeResults"
import { SearchContextProps } from "../../../context/Search/types"
import { DEFAULT_ORDER } from "../../../constants/filters"
import { address, datatype } from "faker"

const cardHomeTestId = "cardHomeTestId"
jest.mock("../../CardHome/CardHome", () => () => {
  return <div data-testid={cardHomeTestId}>Card Home</div>
})

const cardHomeLoadingTestid = "cardHomeLoadingTestid"
jest.mock("../../CardHome/CardHomeLoading", () => () => {
  return <div data-testid={cardHomeLoadingTestid}>Card Home Loading</div>
})

const emptyTestid = "emptyTestid"
jest.mock("../../Empty", () => () => {
  return <div data-testid={emptyTestid}>Empty</div>
})

const sleep = () => act(() => new Promise(resolve => setTimeout(resolve, 100)))

const generateMocks = (
  filter?: SearchContextProps["filter"] & { page?: number },
  count = 5,
  totalCount?: number,
) => {
  const { region, order, guests, page, ...restFilters } = filter || {}
  const variables: HomeVariables = {
    ...restFilters,
    region: region?.id,
    order,
    page: page || 1,
    guests: Number(guests) || 2,
  }

  return {
    request: {
      query: QUERY_HOMES,
      variables,
    },
    result: mockHomeResults(count, totalCount),
  }
}

const Wrapper = () => {
  return (
    <ThemeProvider>
      <ListCardHome />
    </ThemeProvider>
  )
}

describe("Components/ListCardHome/ListCardHome", () => {
  describe("When is loading", () => {
    it("Must render Loading component", () => {
      const mocks = generateMocks()
      mockNextUseRouter()
      mockUseSearch({}, false)
      const { getByTestId } = render(
        <MockedProvider mocks={[mocks]}>
          <Wrapper />
        </MockedProvider>,
      )

      const element = getByTestId(cardHomeLoadingTestid)
      expect(element).toBeInTheDocument()
    })
  })
  describe("When filter is correct and return homes", () => {
    it("Must render all Homes loaded", async () => {
      const filter: SearchContextProps["filter"] = {
        region: {
          id: datatype.uuid(),
          name: address.cityName(),
          stateName: address.state(),
        },
        order: DEFAULT_ORDER,
        guests: String(datatype.number()),
      }
      const count = datatype.number(10) || 5
      const mocks = generateMocks(filter, count)
      mockNextUseRouter()
      mockUseSearch({ filter }, false)
      const { getAllByTestId } = render(
        <MockedProvider mocks={[mocks]}>
          <Wrapper />
        </MockedProvider>,
      )

      await sleep()
      const cardHomes = getAllByTestId(cardHomeTestId)
      expect(cardHomes.length).toEqual(count)
    })
  })
  describe("When request not return homes", () => {
    it("Must render component Empty", async () => {
      const mocks = generateMocks()
      mockNextUseRouter()
      mockUseSearch({}, false)
      const { getByTestId } = render(
        <MockedProvider mocks={[mocks]}>
          <Wrapper />
        </MockedProvider>,
      )

      await sleep()
      const element = getByTestId(emptyTestid)
      expect(element).toBeInTheDocument()
    })
  })
  describe("When scrolling to bottom of the page", () => {
    it("Must load more", async () => {
      const filter: SearchContextProps["filter"] = {
        region: {
          id: datatype.uuid(),
          name: address.cityName(),
          stateName: address.state(),
        },
        order: DEFAULT_ORDER,
        guests: String(datatype.number()),
      }
      const count = datatype.number(10) || 5
      const mocks = generateMocks(filter, count, count * 2)
      const mockMore = generateMocks({ ...filter, page: 2 }, count)
      mockMore.result.data.homes.results.unshift(
        ...mocks.result.data.homes.results,
      )
      mockNextUseRouter()
      mockUseSearch({ filter }, false)
      const { getAllByTestId } = render(
        <MockedProvider mocks={[mocks, mockMore]}>
          <Wrapper />
        </MockedProvider>,
      )

      await sleep()
      const elementsInitial = getAllByTestId(cardHomeTestId)
      expect(elementsInitial.length).toEqual(count)
      await fireEvent.scroll(window, {
        target: {
          scrollingElement: { scrollHeight: 0, scrollTop: 0, clientHeight: 0 },
        },
      })
      await sleep()
      const elementsMore = getAllByTestId(cardHomeTestId)
      expect(elementsMore.length).toEqual(count * 2)
    })
    it("Must hide messagem 'Loading more homes...'", async () => {
      const filter: SearchContextProps["filter"] = {
        region: {
          id: datatype.uuid(),
          name: address.cityName(),
          stateName: address.state(),
        },
        order: DEFAULT_ORDER,
        guests: String(datatype.number()),
      }
      const count = datatype.number(10) || 5
      const mocks = generateMocks(filter, count, count * 2)
      const mockMore = generateMocks({ ...filter, page: 2 }, count)
      mockMore.result.data.homes.results.unshift(
        ...mocks.result.data.homes.results,
      )
      mockNextUseRouter()
      mockUseSearch({ filter }, false)
      const { getByText } = render(
        <MockedProvider mocks={[mocks, mockMore]}>
          <Wrapper />
        </MockedProvider>,
      )

      await sleep()
      await fireEvent.scroll(window, {
        target: {
          scrollingElement: { scrollHeight: 0, scrollTop: 0, clientHeight: 0 },
        },
      })
      await sleep()
      const teste = getByText("Loading more homes...")
      expect(teste).not.toBeVisible()
    })
  })
})
