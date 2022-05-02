import { renderHook } from "@testing-library/react-hooks"
import useMoney from "../useMoney"

describe("hooks/useMoney", () => {
  describe("When not pass any value", () => {
    it("Must return empty value", () => {
      const { result } = renderHook(() => useMoney())
      expect(result.current).toEqual("")
    })
  })
  describe("When pass number value", () => {
    it("Must return formatted value", () => {
      const { result } = renderHook(() => useMoney(10))
      expect(result.current).toEqual("$10")
    })
  })
  describe("When pass array number value", () => {
    it("Must return formatted value", () => {
      const { result } = renderHook(() => useMoney([10, 20]))
      expect(result.current).toEqual(["$10", "$20"])
    })
  })
})
