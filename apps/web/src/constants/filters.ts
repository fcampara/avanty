export const DEFAULT_ORDER = "RELEVANCE"
export const ORDERS = [
  { label: "Relevance", value: DEFAULT_ORDER },
  { label: "Price: Lowest First", value: "PRICE_DESC" },
  { label: "Price: Highest First", value: "PRICE_ASC" },
]
export const GUESTS = new Array(30).fill(undefined).map((_, index) => {
  const value = String(index + 1)
  const label = value === "1" ? "1 guest" : `${value} guests`
  return {
    label,
    value,
  }
})
export const DEFAULT_GUESTS = GUESTS[1]
