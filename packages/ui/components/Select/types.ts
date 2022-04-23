import { InputHTMLAttributes } from "react"

type SelectOption = {
  label: string
  value: string
}

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string
  options?: SelectOption[]
}
