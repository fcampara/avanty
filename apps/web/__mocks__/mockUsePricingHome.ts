import { PricingContextProps } from "../src/context/Pricing/types"

/* eslint-disable @typescript-eslint/no-var-requires */
const usePricingHome = jest.spyOn(
  require("../src/hooks/usePricingHome"),
  "usePricingHome",
)

export function mockUsePricingHome(props: Partial<PricingContextProps>) {
  usePricingHome.mockImplementationOnce(() => ({
    loading: props?.loading || false,
    pricing: props?.pricing || new Map(),
  }))
}
