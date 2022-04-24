const DEFAULT_CONFIG = {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
}

const useMoney = (
  value?: number | number[],
  options: Intl.NumberFormatOptions = DEFAULT_CONFIG,
) => {
  if (!value) return ""
  const formatter = new Intl.NumberFormat("en-US", options).format

  if (Array.isArray(value)) return [formatter(value[0]), formatter(value[1])]
  return formatter(value)
}

export default useMoney
