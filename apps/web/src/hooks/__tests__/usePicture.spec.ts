import { renderHook } from "@testing-library/react-hooks"
import usePicture from "../usePicture"

const MOCKED_URL =
  "https://imglite.avantstay.com/homes/db5dd92d-51c1-11ea-aff7-8d6278492f66/images/original_156505293.jpeg"

describe("hooks/usePicture", () => {
  describe("When any parameter", () => {
    it("Must return same url", () => {
      const { result } = renderHook(() => usePicture(MOCKED_URL))
      expect(result.current).toEqual(MOCKED_URL)
    })
  })
  describe("When pass parameter 'webp'", () => {
    it("Must return url with query param webp equal true", () => {
      const { result } = renderHook(() =>
        usePicture(MOCKED_URL, {
          webp: true,
        }),
      )
      expect(result.current.includes("webp=true")).toBeTruthy()
    })
  })
  describe("When pass parameter 'width'", () => {
    it("Must return url with query param width", () => {
      const width = 320
      const { result } = renderHook(() =>
        usePicture(MOCKED_URL, {
          width,
        }),
      )
      expect(result.current.includes(`width=${width}`)).toBeTruthy()
    })
  })
  describe("When pass parameter 'height'", () => {
    it("Must return url with query param height", () => {
      const height = 320
      const { result } = renderHook(() =>
        usePicture(MOCKED_URL, {
          height,
        }),
      )
      expect(result.current.includes(`height=${height}`)).toBeTruthy()
    })
  })
  describe("When pass parameter 'quality'", () => {
    it("Must return url with query param quality", () => {
      const quality = 100
      const { result } = renderHook(() =>
        usePicture(MOCKED_URL, {
          quality,
        }),
      )
      expect(result.current.includes(`quality=${quality}`)).toBeTruthy()
    })
  })
})
