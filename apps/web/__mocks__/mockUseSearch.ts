import { SearchContextProps } from "../src/context/Search/types"
import { Region } from "../src/services/graphql/regions/types"

/* eslint-disable @typescript-eslint/no-var-requires */
const useSearch = jest.spyOn(require("../src/hooks/useSearch"), "useSearch")

export function mockUseSearch(
  props: {
    filter?: Partial<SearchContextProps["filter"]>
    regions?: Region[]
    clearFilters?: jest.Mock
    onChangeFilter?: jest.Mock
  } = {},
  once = true,
) {
  const useSearchValues = {
    clearFilters: props.clearFilters || jest.fn,
    onChangeFilter: props.onChangeFilter || jest.fn,
    regions: props.regions || [],
    filter: props.filter || {},
    setFilter: jest.fn(),
  }
  if (once) return useSearch.mockImplementationOnce(() => useSearchValues)
  return useSearch.mockImplementation(() => useSearchValues)
}
