import { debounce } from "lodash-es"
import { useState } from "react"

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  debounce(() => {
    setDebouncedValue(value)
  }, delay)

  return debouncedValue
}
