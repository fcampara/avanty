/* eslint-disable @typescript-eslint/no-var-requires */
const useSearch = jest.spyOn(require("../src/context/Search/provider"), "useSearch")

export function mockUseSearch(props: {
  clearFilters?: jest.Mock
} = {}) {
  useSearch.mockImplementationOnce(() => ({
    clearFilters: props.clearFilters || jest.fn
  }))
}
