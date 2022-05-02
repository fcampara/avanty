import { fireEvent, render } from "@testing-library/react"
import { randomUUID } from "crypto"
import { ThemeProvider } from "ui/styles"
import { mockNextUseRouter } from "../../../../__mocks__/mockNextUseRouter"
import { mockUseSearch } from "../../../../__mocks__/mockUseSearch"
import { SearchProvider } from "../../../context/Search"
import Header from "../Header"
import { address, datatype } from "faker"
import { Region } from "../../../services/graphql/regions/types"
import { ORDERS } from "../../../constants/filters"
import { HomeVariableOrder } from "../../../services/graphql/homes"

const regions: Region[] = new Array(20).fill(null).map(() => ({
  id: randomUUID(),
  name: address.city(),
  stateName: address.stateAbbr(),
}))
const sleep = (time = 500) => new Promise(resolve => setTimeout(resolve, time))

const Wrapper = () => {
  return (
    <ThemeProvider>
      <SearchProvider regions={regions}>
        <Header />
      </SearchProvider>
    </ThemeProvider>
  )
}

describe("Components/Header", () => {
  describe("When change filter 'Where'", () => {
    it("Must call function 'onChangeFilter'", async () => {
      const onChangeFilter = jest.fn()
      mockNextUseRouter()
      mockUseSearch({
        regions,
        onChangeFilter,
      })
      const { container } = render(<Wrapper />)
      const whereElement = container.querySelector(
        'select[name="regions"]',
      ) as HTMLSelectElement
      const regionName = regions[0].name
      fireEvent.change(whereElement, {
        target: {
          value: regionName,
        },
      })

      await sleep()
      expect(onChangeFilter).toBeCalledWith(regionName, "regions")
    })
  })
  describe("When change filter 'When' (checkIn)", () => {
    it("Must call function 'onChangeFilter'", async () => {
      const onChangeFilter = jest.fn()
      mockNextUseRouter()
      mockUseSearch({
        regions,
        onChangeFilter,
      })
      const { container } = render(<Wrapper />)
      const checkInElement = container.querySelector(
        'input[name="checkIn"]',
      ) as HTMLInputElement
      const checkIn = "2022-05-02"
      fireEvent.change(checkInElement, {
        target: {
          value: checkIn,
        },
      })

      await sleep()
      expect(onChangeFilter).toBeCalledWith(checkIn, "checkIn")
    })
  })
  describe("When change filter 'When' (checkOut)", () => {
    it("Must call function 'onChangeFilter'", async () => {
      const onChangeFilter = jest.fn()
      mockNextUseRouter()
      mockUseSearch({
        regions,
        onChangeFilter,
      })
      const { container } = render(<Wrapper />)
      const checkOutElement = container.querySelector(
        'input[name="checkOut"]',
      ) as HTMLInputElement
      const checkOut = "2022-05-02"
      fireEvent.change(checkOutElement, {
        target: {
          value: checkOut,
        },
      })

      await sleep()
      expect(onChangeFilter).toBeCalledWith(checkOut, "checkOut")
    })
  })
  describe("When change filter 'Who'", () => {
    it("Must call function 'onChangeFilter'", async () => {
      const onChangeFilter = jest.fn()
      mockNextUseRouter()
      mockUseSearch({
        regions,
        onChangeFilter,
      })
      const { container } = render(<Wrapper />)
      const guestElement = container.querySelector(
        'input[name="guests"]',
      ) as HTMLInputElement
      const guests = String(datatype.number(30))
      fireEvent.change(guestElement, {
        target: {
          value: guests,
        },
      })

      await sleep()
      expect(onChangeFilter).toBeCalledWith(guests, "guests")
    })
  })
  describe("When change filter 'Order'", () => {
    it("Must call function 'onChangeFilter'", async () => {
      const onChangeFilter = jest.fn()
      mockNextUseRouter()
      mockUseSearch({
        regions,
        onChangeFilter,
      })
      const { container } = render(<Wrapper />)
      const orderElement = container.querySelector(
        'select[name="order"]',
      ) as HTMLInputElement
      const order = ORDERS[1].value
      fireEvent.change(orderElement, {
        target: {
          value: order,
        },
      })

      await sleep()
      expect(onChangeFilter).toBeCalledWith(order, "order")
    })
  })
  describe("When start component with regions", () => {
    it("Must fill select region with formatted label", () => {
      mockNextUseRouter()
      mockUseSearch({
        regions,
      })
      const { container } = render(<Wrapper />)
      const whereElement = container.querySelector(
        'select[name="regions"]',
      ) as HTMLSelectElement
      const [firstRegion] = regions
      const filterOptionWithValue = whereElement.querySelector(
        `option[value="${firstRegion.name}"]`,
      ) as HTMLOptionElement
      expect(filterOptionWithValue.value).toEqual(firstRegion.name)
      expect(filterOptionWithValue.textContent).toEqual(
        `${firstRegion.name}, ${firstRegion.stateName}`,
      )
    })
  })
  describe("When 'filter' already start with value", () => {
    it("Must defaultValue filled", () => {
      const filter = {
        guests: String(datatype.number(30)),
        order: ORDERS[1].value as HomeVariableOrder,
        period: {
          checkIn: "2022-05-02",
          checkOut: "2022-06-02",
        },
        region: regions[1],
      }
      mockNextUseRouter()
      mockUseSearch({
        regions,
        filter,
      })

      const { container } = render(<Wrapper />)
      const checkInElement = container.querySelector(
        'input[name="checkIn"]',
      ) as HTMLInputElement

      const whereElement = container.querySelector(
        'select[name="regions"]',
      ) as HTMLSelectElement

      const checkOutElement = container.querySelector(
        'input[name="checkOut"]',
      ) as HTMLInputElement

      const guestElement = container.querySelector(
        'input[name="guests"]',
      ) as HTMLInputElement

      const orderElement = container.querySelector(
        'select[name="order"]',
      ) as HTMLInputElement

      expect(whereElement.value).toEqual(filter.region.name)
      expect(checkInElement.value).toEqual(filter.period.checkIn)
      expect(checkOutElement.value).toEqual(filter.period.checkOut)
      expect(guestElement.value).toEqual(filter.guests)
      expect(orderElement.value).toEqual(filter.order)
    })
  })
})
